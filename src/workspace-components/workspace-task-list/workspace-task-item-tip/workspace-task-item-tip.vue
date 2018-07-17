<template>
  <div :class="{ 'task-item-tip-container-full': full }" v-if="full">
    <div class="task-item-tip-container" :class="[ container_full_style ]">
      <span class="tip-icon" :class="[ tip_icon_style ]" v-if="!full"></span>
      <div class="text" :class="{ 'text-full': full }">
        <slot></slot>
      </div>
    </div>
  </div>
  <div class="task-item-tip-container" :class="[ container_full_style ]" v-else>
    <span class="tip-icon" :class="[ tip_icon_style ]" v-if="!full"></span>
    <div class="text" :class="{ 'text-full': full }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-task-item-tip',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tip_icon_style () {
      return `tip-icon-${this.$props.type}`
    },
    container_full_style () {
      if (this.$props.full) {
        return `task-item-tip-container-full-${this.$props.type}`
      }
    }
  }
}
</script>
