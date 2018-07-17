<template>
  <div class="ws-project-card-container"><slot></slot></div>
</template>

<script>
export default {
  name: 'workspace-project-card-container'
}
</script>

<style scoped lang="scss">
  .ws-project-card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    max-width: 1788px;
    padding: {
      top: 6px;
      bottom: 6px;
    }
    .project-card-container:nth-child(n) {
      margin-right: 47px;
    }
    .project-card-container:nth-child(4n) {
      margin-right: 0 !important;
    }
    .project-card-container:nth-child(n+5) {
      margin-top: 46px;
    }
  }
</style>
