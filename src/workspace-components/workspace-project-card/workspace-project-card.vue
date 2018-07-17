<template>
  <div class="project-card-container" v-if="type==='default'" @click="open_project">
    <div class="project-card-container-bg" :class="{ 'project-card-container-bg-focus': hover }" :style="{ backgroundImage: bg_url }">
      <div class="project-card-container-bg-shadow" :class="{ 'project-card-container-bg-shadow-focus': hover }"></div>
    </div>
    <div class="project-card-content"
         @mouseenter="mouse_hover"
         @mouseleave="mouse_leave">
      <div class="visibility-tip">{{ visibility.trim().toUpperCase() }}</div>
      <div class="project-details" :class="{ 'project-details-hover': hover }">
        <!--base details-->
        <div class="project-name" :class="{ 'project-name-hover': hover }">{{ title }}</div>
        <div class="project-remarks" :class="{ 'project-remarks-hover': hover }">{{ remarks }}</div>
        <!--progress bar-->
        <div class="progress-bar-container">
          <workspace-progress-bar v-if="hover" :total="100" :success="25" :active="40" :dangerous="12"></workspace-progress-bar>
        </div>
        <!--summary-->
        <div class="details-summary" :class="{ 'details-summary-hover': hover }">
          <workspace-imagebox width="16" height="16" :offset="[-293, -137, -293, -137, -293, -137]"></workspace-imagebox>
          <span class="summary-text">85%</span>
          <workspace-imagebox width="16" height="16" :offset="[-293, -173, -293, -173, -293, -173]"></workspace-imagebox>
          <span class="summary-text">195 items</span>
        </div>
      </div>
    </div>
  </div>
  <div class="project-card-container button-card" v-else-if="type==='create'" @click="create_dialog">
    <i class="button-card-icon material-icons">add_circle_outline</i>
    <span class="button-card-text">NEW PROJECT</span>
  </div>
  <div class="project-card-container close-button-card" v-else-if="type==='close'">
    <div class="project-card-container-bg" :style="{ backgroundImage: bg_url }">
      <div class="project-card-container-bg-shadow project-card-container-bg-shadow-focus"></div>
    </div>
    <div class="simple-project-content">
      <i class="simple-project-content-icon material-icons">lock_outline</i>
      <span class="simple-project-name">{{ title }}</span>
      <span class="simple-project-remarks">{{ remarks }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-project-card',
  props: {
    projectId: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    },
    remarks: {
      type: String,
      default: ''
    },
    visibility: {
      type: String,
      default: 'PUBLIC'
    },
    iconFileId: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      hover: false
    }
  },
  methods: {
    open_project () {
      this.$loading.show('Initializing Task List')
      this.$api.all_task_lists({
        'project_id': this.$props.projectId
      }).then((response) => {
        this.$loading.hidden()
        this.$store.state.taskLists = response['task_lists']
        this.$router.push('/project')
      }).catch(() => {
        this.$loading.hidden()
        this.$dialog.create({ message: '获取列表失败' })
      })
    },
    mouse_hover () {
      this.$data.hover = true
    },
    mouse_leave () {
      this.$data.hover = false
    },
    create_dialog () {
      this.$createProjectDialog.create({}, (currentTemplate, projectEntity, file) => {
        this.$emit('create', currentTemplate, projectEntity, file)
      })
    }
  },
  computed: {
    bg_url () {
      return `url(https://localhost:444/source/${this.$props.iconFileId})`
    }
  }
}
</script>
