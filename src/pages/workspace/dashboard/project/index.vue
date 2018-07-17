<template>
  <div class="project-box">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Task</el-menu-item>
      <el-menu-item index="2">Share</el-menu-item>
      <el-menu-item index="3">File</el-menu-item>
      <el-menu-item index="4">Schedule</el-menu-item>
      <el-menu-item index="5">Chat</el-menu-item>
    </el-menu>
    <div class="project-container" @mousewheel="onMouseWheel" ref="container">
      <workspace-task-list v-for="taskList in taskLists" :key="taskList.id" :id="taskList.id" :name="taskList.name" v-if="taskList.type === 0" :type="taskList.type"></workspace-task-list>
      <workspace-task-list v-for="taskList in taskLists" :key="taskList.id" :id="taskList.id" :name="taskList.name" v-if="taskList.type === 1" :type="taskList.type"></workspace-task-list>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      taskLists: this.$store.state.taskLists,
      activeIndex: '1'
    }
  },
  methods: {
    onMouseWheel (event) {
      if (event.deltaY) {
        this.$refs.container.scrollTo((this.$refs.container.scrollLeft + event.deltaY), 0)
      }
    }
  }
}
</script>

<style scoped>
  .project-box {
    width: 100%;
    height: 100%;
    padding: 15px;
    overflow-x: visible;
    overflow-y: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .project-container {
    width: 100%;
    height: 100%;
    padding: 10px 0;
    overflow-x: visible;
    overflow-y: hidden;
    background-color: white;
    box-sizing: border-box;
    white-space: nowrap;
  }
</style>
