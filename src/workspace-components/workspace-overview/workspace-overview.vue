<template>
  <div class="ws-overview" :class="[item_style]">
    <div class="ws-overview-header">
      <workspace-imagebox v-if="type==='urgent'" width="27" height="26" :offset="[-188, -138, -188, -138, -188, -138]"></workspace-imagebox>
      <workspace-imagebox v-if="type==='active'" width="26" height="26" :offset="[-247, -56, -247, -56, -247, -56]"></workspace-imagebox>
      <workspace-imagebox v-if="type==='complete'" width="26" height="26" :offset="[-247, -10, -247, -10, -247, -10]"></workspace-imagebox>
      <workspace-imagebox v-if="type==='overdue'" width="28" height="28" :offset="[-140, -138, -140, -138, -140, -138]"></workspace-imagebox>
      <span class="ws-overview-header-text">{{ item_name }}</span>
    </div>
    <div class="ws-overview-container">
      <span class="ws-overview-container-text"><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'workspace-overview',
  props: {
    type: {
      type: String,
      default: 'urgent'
    }
  },
  computed: {
    item_style () {
      return 'ws-overview-' + this.$props.type
    },
    item_name () {
      return (this.$props.type + ' items')
    }
  }
}
</script>
