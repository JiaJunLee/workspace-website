<template>
  <div class="home-container">
    <!--<form action="https://localhost:444/source/upload" method="post" enctype="multipart/form-data">-->
      <!--<input type="file" name="file" />-->
      <!--<input type="submit" value="上传文件" />-->
    <!--</form>-->
    <div class="home-box">
      <dashboard-tip>Overview</dashboard-tip>
      <workspace-overview-container>
        <workspace-overview type="urgent">37</workspace-overview>
        <workspace-overview type="active">128</workspace-overview>
        <workspace-overview type="complete">1024</workspace-overview>
        <workspace-overview type="overdue">312</workspace-overview>
      </workspace-overview-container>
      <dashboard-tip>Active Project</dashboard-tip>
      <workspace-project-card-container>
        <workspace-project-card v-for="project in projects" :key="project.id" :visibility="project.visibility === 0 ? 'public' : 'private'" :title="project.name" :remarks="project.introduce" v-if="project.visibility === 0 || project.visibility === 1" :icon-file-id="project.icon_file_id" :projectId="project.id"></workspace-project-card>
        <workspace-project-card type="create" @create="create_project"></workspace-project-card>
      </workspace-project-card-container>
      <dashboard-tip>Inactive Project</dashboard-tip>
      <workspace-project-card-container>
        <workspace-project-card v-for="project in projects" :key="project.id" type="close" :title="project.name" :remarks="project.introduce" v-if="project.visibility === 2" :icon-file-id="project.icon_file_id"></workspace-project-card>
      </workspace-project-card-container>
      <div class="home-footer">
        ©2018 Workspace
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard_home',
  data () {
    return {
      projects: null
    }
  },
  methods: {
    create_project (currentTemplate, projectEntity, file) {
      console.log(currentTemplate)
      console.log(projectEntity)
      this.$loading.show('Creating')
      this.$api.upload(file).then((response) => {
        let fileId = response['file_source']['id']
        if (fileId !== undefined) {
          this.$api.create_project({
            'name': projectEntity.name,
            'introduce': projectEntity.introduce,
            'visibility': projectEntity.visibility,
            'team_id': this.$store.state.teams[0]['id'],
            'icon_file_id': fileId,
            'project_template_id': currentTemplate['id']
          }).then((response) => {
            this.$loading.hidden()
            this.refresh()
          }).catch(() => {
            this.$loading.hidden()
            this.$dialog.create({ message: '创建失败' })
          })
        } else {
          this.$loading.hidden()
          this.$dialog.create({ message: '上传失败' })
        }
      }).catch(() => {
        this.$loading.hidden()
        this.$dialog.create({ message: '创建失败' })
      })
    },
    refresh () {
      let teams = this.$store.state.teams
      if (teams === undefined || teams === null) {
        this.$dialog.create({ message: '请重新登录' })
        this.$router.push('/login')
      } else {
        this.$loading.show('Initializing Projects')
        this.$api.all_projects({
          'team_id': teams[0]['id']
        }).then((response) => {
          this.$store.state.projects = response['projects']
          this.$data.projects = this.$store.state.projects
          this.$loading.hidden()
        }).catch((error) => {
          console.log(error)
          this.$loading.hidden()
        })
      }
    }
  },
  created () {
    // initialize all project
    this.refresh()
  }
}
</script>

<style scoped>
  .home-container {
    min-width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 80px;
    padding-right: 80px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-box {
    height: 100%;
  }
  .home-footer {
    width: 100%;
    margin-top: 60px;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.35);
  }
</style>
