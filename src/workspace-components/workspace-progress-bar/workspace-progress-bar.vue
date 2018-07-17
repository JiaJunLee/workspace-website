<template>
  <div class="ws-progress-bar-container">
    <div class="ws-progress-bar-success ws-progress-bar" :style="{ width: (success * 100 / total) + '%' }"></div>
    <div class="ws-progress-bar-active ws-progress-bar" :style="{ width: (active * 100 / total) + '%' }"></div>
    <div class="ws-progress-bar-dangerous ws-progress-bar" :style="{ width: (dangerous * 100 / total) + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'workspace-progress-bar',
  props: {
    success: {
      type: Number,
      default: 0
    },
    active: {
      type: Number,
      default: 0
    },
    dangerous: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>
