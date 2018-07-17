<template>
  <div class="task-list-container" v-if="!createTaskList">
    <div class="task-list-header">
      <div class="task-list-header-left">
        <span class="task-list-header-text">{{ name }}</span>
        <i class="task-list-header-icon material-icons">chevron_right</i>
      </div>
      <div class="task-list-header-right">
        <i class="task-list-header-icon material-icons menu-button">menu</i>
      </div>
    </div>
    <div class="task-list-items-container">
      <div class="task-list-items">
        <workspace-task-item create-button v-if="type === 0" @click="create_task"></workspace-task-item>
        <workspace-task-item v-for="task in tasks" :key="task.id" :content="task.content" :type="type === 1 ? 'close' : task.type === 0 ? 'default' : task.type === 1 ? 'warning' : 'primary'" :expiry="task.expiry" :icon-file-id="task.icon_file_id">
          <div slot="tips">
            <workspace-task-item-tip type="default">Java</workspace-task-item-tip>
            <workspace-task-item-tip type="activity">Groovy</workspace-task-item-tip>
            <workspace-task-item-tip type="warning">Apache Shiro</workspace-task-item-tip>
            <workspace-task-item-tip type="success">Spring Framework</workspace-task-item-tip>
            <workspace-task-item-tip type="primary">C++</workspace-task-item-tip>
          </div>
        </workspace-task-item>
        <div class="task-list-empty" v-if="tasks === null || tasks.length === 0">
          <i class="icon material-icons">subject</i>
          <span class="text">Empty List</span>
        </div>
      </div>
    </div>
  </div>
  <div class="task-list-create-container" v-else>
    <div class="create-button">
      <i class="icon material-icons">add_circle</i>
      <span class="text">CREATE NEW TASK LIST</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-task-list',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: ''
    },
    createTaskList: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      tasks: null
    }
  },
  methods: {
    create_task () {
      if (this.$props.id === null) {
        this.$dialog.create({message: '未知列表'})
      } else {
        this.$createTaskDialog.create({}, (task) => {
          this.$loading.show('Creating Task')
          this.$api.create_task({
            'content': task.content,
            'type': task.type,
            'expiry': task.expiry,
            'task_list_id': this.$props.id
          }).then((response) => {
            this.$loading.hidden()
            this.refresh()
          }).catch(() => {
            this.$loading.hidden()
            this.$dialog.create({message: '创建失败'})
          })
        })
      }
    },
    refresh () {
      this.$api.all_tasks({
        'task_list_id': this.$props.id
      }).then((response) => {
        this.$data.tasks = response['tasks']
      }).catch(() => {
        this.$message('Task List Initialize Failed')
      })
    }
  },
  created () {
    this.refresh()
  }
}
</script>
