<template>
  <div class="ws-overview-container"><slot></slot></div>
</template>

<script>
export default {
  name: 'workspace-overview-container'
}
</script>

<style scoped lang="scss">
  .ws-overview-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 1788px;
    padding: {
      top: 6px;
      bottom: 6px;
    }
    .ws-overview:nth-child(n) {
      margin-right: 47px;
    }
    .ws-overview:nth-child(4n) {
      margin-right: 0 !important;
    }
    .ws-overview:nth-child(n+5) {
      margin-top: 46px;
    }
  }
</style>
