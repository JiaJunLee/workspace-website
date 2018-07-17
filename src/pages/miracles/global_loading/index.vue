<template>
  <div style="position: absolute; top: 0; left: 0; z-index: 9999">
    <miracles-button @click="show" type="primary" icon="check">show loading</miracles-button>
    <miracles-button @click="hidden" type="success" icon="clear">hidden loading</miracles-button>
  </div>
</template>

<script>
export default {
  name: 'global_loading_demo',
  methods: {
    show () {
      this.$loading.show('加载数据')
    },
    hidden () {
      this.$loading.hidden()
    }
  }
}
</script>
