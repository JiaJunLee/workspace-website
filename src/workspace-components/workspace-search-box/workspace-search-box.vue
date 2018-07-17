<template>
  <div class="ws-search-box-container">
    <workspace-imagebox width="24" height="25" :offset="[-293, -54, -293, -54, -293, -54]" class="ws-search-icon"></workspace-imagebox>
    <span v-if="unFocus && searchContent.trim() === ''" class="ws-search-box-placeholder">Search in here ..</span>
    <input class="ws-search-box-input" @focus="onFocus" @blur="onBlur" @keyup.enter="enter" v-model="searchContent"/>
    <div class="ws-search-result-container" v-if="projects.length > 0 || taskLists.length > 0 || tasks.length > 0">
      <div v-if="projects.length > 0">
        <span class="search-result-text-tip">Project</span>
        <miracles-button-group direction="vertical" margin="small" style="width: 100%;">
          <miracles-button icon="dehaze" icon_size="small" text-size="small" v-for="project in projects" :key="project.id">{{ project.name }}</miracles-button>
        </miracles-button-group>
      </div>
      <div v-if="taskLists.length > 0">
        <span class="search-result-text-tip">Task List</span>
        <miracles-button-group direction="vertical" margin="small" style="width: 100%;">
          <miracles-button icon="graphic_eq" icon_size="small" text-size="small" v-for="taskList in taskLists" :key="taskList.id">{{ taskList.name }}</miracles-button>
        </miracles-button-group>
      </div>
      <div v-if="tasks.length > 0">
        <span class="search-result-text-tip">Task</span>
        <miracles-button-group direction="vertical" margin="small" style="width: 100%;">
          <miracles-button icon="insert_invitation" icon_size="small" text-size="small" v-for="task in tasks" :key="task.id">{{ task.content }}</miracles-button>
        </miracles-button-group>
      </div>
    </div>
    <div class="ws-search-result-container" v-else-if="isEnter">
      <span class="search-result-text-tip">No Search Result</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-search-box',
  data () {
    return {
      unFocus: true,
      isEnter: false,
      searchContent: '',
      projects: [],
      taskLists: [],
      tasks: []
    }
  },
  methods: {
    onFocus () {
      this.$data.unFocus = false
    },
    onBlur () {
      this.$data.unFocus = true
      this.$data.isEnter = false
      this.$data.projects = []
      this.$data.taskLists = []
      this.$data.tasks = []
    },
    enter () {
      this.$api.search({
        'search_content': this.$data.searchContent,
        'team_id': this.$store.state.teams[0]['id']
      }).then((response) => {
        this.$data.projects = response['projects']
        this.$data.taskLists = response['task_lists']
        this.$data.tasks = response['tasks']
        this.$data.isEnter = true
      }).catch(() => {
        this.$dialog.create({ message: '查询失败' })
      })
    }
  }
}
</script>

<style scoped>
  .ws-search-result-container {
    width: 345px;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 9999;
    background-color: white;
    box-shadow: 0 0 6px rgba(0,0,0,.25);
    padding: 12px;
    box-sizing: border-box;
  }
  .ws-search-box-container {
    width: 264px;
    border-bottom: 2px solid #90a4ae;
    position: relative;
    padding-bottom: 32px;
  }
  .ws-search-box-input {
    width: 224px;
    height: 32px;
    padding: 8px 0;
    font-size: 16px;
    background-color: transparent;
    color: #607d8b;
    border: none;
    outline: 0;
    cursor: pointer;
    letter-spacing: 1px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 40px;
  }
  .ws-search-box-placeholder {
    font-size: 18px;
    color: #b0bec5;
    font-style: italic;
    position: absolute;
    top: 8px;
    left: 40px;
  }
  .ws-search-icon {
    position: absolute;
    bottom: 4px;
    left: 0;
  }
  .search-result-text-tip {
    font-size: 13px;
    color: grey;
    margin: 6px 0;
    display: block;
  }
</style>
