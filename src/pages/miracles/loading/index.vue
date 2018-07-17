<template>
  <div>
    <miracles-button icon="autorenew" type="primary" @click="toggle" style="position: absolute; z-index: 9999;">Toggle Button</miracles-button>
    <miracles-loading :visible="visible" message="加载数据"></miracles-loading>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
    <h1>Hello world</h1>
  </div>
</template>

<script>
export default {
  name: 'loading_demo',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggle () {
      this.visible = !this.visible
    }
  }
}
</script>
