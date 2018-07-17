<template>
  <div class="task-item-container" v-if="!createButton" :class="{ 'task-item-disable': type === 'close' }">
    <span class="task-item-type" :class="[ task_item_type_style ]"></span>
    <div class="task-box">
      <div class="icon" :style="{ backgroundImage: icon_url }"></div>
      <div class="content">
        <div class="text">{{ content }}</div>
        <div class="tips">
          <workspace-task-item-tip v-if="expiryLess" type="warning" full>{{ expiryLessTip }} 截止</workspace-task-item-tip>
          <slot name="tips"></slot>
        </div>
      </div>
    </div>
  </div>
  <div class="create-task-item-container" v-else @click="on_create">
    <div class="icon-box">
      <i class="icon material-icons">add_circle</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-task-item',
  props: {
    content: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    },
    expiry: {
      type: String,
      default: ''
    },
    createButton: {
      type: Boolean,
      default: false
    },
    iconFileId: {
      type: String,
      default: ''
    }
  },
  methods: {
    parseDate (date) {
      let year = date.trim().substr(0, 4)
      let month = date.trim().substr(5, 2)
      let day = date.trim().substr(8, 2)
      let hour = date.trim().substr(11, 2)
      let minute = date.trim().substr(14, 2)
      return new Date(year, (month - 1), day, hour, minute, 0, 0)
    },
    on_create () {
      this.$emit('click')
    }
  },
  computed: {
    task_item_type_style () {
      return `task-item-type-${this.$props.type}`
    },
    expiryLessTip () {
      let expiryDate = this.parseDate(this.$props.expiry.trim())
      let tip = ''
      if (expiryDate.getDate() === new Date().getDate()) {
        tip = '今天 '
      } else if (expiryDate.getDate() === new Date().getDate() + 1) {
        tip = '明天 '
      } else if (expiryDate.getDate() === new Date().getDate() + 2) {
        tip = '后天 '
      }
      tip = tip + this.$props.expiry.trim().substr(11, 5)
      return tip
    },
    expiryLess () {
      if (this.$props.expiry !== undefined && this.$props.expiry.trim() !== '') {
        let expiryDate = this.parseDate(this.$props.expiry)
        console.log(expiryDate)
        let tmpDate = new Date()
        tmpDate.setDate(tmpDate.getDate() + 2)
        tmpDate.setHours(23)
        tmpDate.setMinutes(59)
        tmpDate.setSeconds(59)
        if (expiryDate > new Date() && expiryDate < tmpDate) {
          return true
        }
      }
      return false
    },
    icon_url () {
      if (this.$props.iconFileId === '') {
        return ''
      }
      return `url(https://localhost:444/source/${this.$props.iconFileId})`
    }
  }
}
</script>
