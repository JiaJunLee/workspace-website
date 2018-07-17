<template>
  <miracles-dialog :visible="isVisible" type="html" :title="title" icon="view_week">
    <div slot="html">
      <transition name="zoom" mode="out-in">
        <!--select template-->
        <div class="create-project-container" :class="{ 'create-project-container-loading': isLoading }" v-if="currentTemplate===null" key="box1">
          <div class="project-template-loading" v-if="isLoading"></div>
          <div style="display: inline-flex; width: 100%;" v-if="!isLoading">
            <div class="template-card" @click="select_blank">
              <div class="template-card-bg template-card-bg-blank"></div>
              <div class="template-card-content">
                <div class="template-card-content">
                  <i class="template-card-icon material-icons">add_circle_outline</i>
                  <div class="template-card-name template-card-name-blank">Blank Template</div>
                  <div class="template-card-remarks">Simplify what is complicated.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="template-card" v-for="template in projectTemplates" :key="template.id" v-if="!isLoading" @click="select(template)">
            <div class="template-card-bg" :style="{ backgroundImage: source_url(template) }"></div>
            <div class="template-card-shadow"></div>
            <div class="template-card-content">
              <div class="template-card-name">{{ template['name'] }}</div>
              <div class="template-card-remarks">{{ template['introduce'] }}</div>
            </div>
          </div>
        </div>
        <!--create details-->
        <div class="create-project-details-container" v-else>
          <div>Current Template: {{ currentTemplate['name'] }}</div>
          <miracles-text-field name="Name" v-model="projectName"></miracles-text-field>
          <miracles-text-field name="Introduce" v-model="projectIntroduce"></miracles-text-field>
          <miracles-file-input @change="fileChange"></miracles-file-input>
        </div>
      </transition>
    </div>
    <div slot="buttons">
      <miracles-button v-if="currentTemplate!==null" icon_size="small" icon="chevron_left" @click="back" style="margin-right: 12px;">Back</miracles-button>
      <miracles-button icon_size="small" icon="close" @click="toggle" style="margin-right: 12px;">Cancel</miracles-button>
      <miracles-button v-if="currentTemplate!==null" icon_size="small" icon="check" style="margin-right: 12px;" type="activity" @click="on_create">Create</miracles-button>
    </div>
  </miracles-dialog>
</template>

<script>
export default {
  name: 'create-project-dialog-dialog',
  data () {
    return {
      title: 'Select Project Template',
      isVisible: false,
      isLoading: false,
      projectTemplates: {},
      currentTemplate: null,
      projectName: '',
      projectIntroduce: '',
      projectVisibility: 0,
      file: null
    }
  },
  methods: {
    on_create () {
      this.submit (this.$data.currentTemplate, {
        name: this.$data.projectName,
        introduce: this.$data.projectIntroduce,
        visibility: this.$data.projectVisibility
      }, this.$data.file)
      this.toggle()
    },
    fileChange (file) {
      this.$data.file = file
    },
    toggle () {
      this.$data.isVisible = !this.$data.isVisible
    },
    source_url (template) {
      return `url(https://localhost:444/source/${template['icon_file_id']})`
    },
    select (template) {
      this.$data.currentTemplate = template
    },
    back () {
      this.$data.currentTemplate = null
    },
    select_blank () {
      this.$data.currentTemplate = {
        id: '0',
        name: 'Blank Template',
        introduce: 'Simplify what is complicated.'
      }
    }
  },
  watch: {
    currentTemplate (val) {
      if (val !== null) {
        this.$data.title = 'Create Project'
      } else {
        this.$data.title = 'Select Project Template'
      }
    }
  },
  created () {
    this.$data.isLoading = true
    this.$api.all_project_templates().then((response) => {
      this.$data.projectTemplates = response['template']
      this.$data.isLoading = false
    }).catch(() => {
      this.$data.isLoading = false
    })
  }
}
</script>
