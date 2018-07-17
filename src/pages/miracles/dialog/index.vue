<template>
  <div>
    <br/>
    <table style="height: 140px" border="1">
      <tr valign="middle">
        <td>title</td>
        <td><input type="text" v-model="title"/></td>
      </tr>
      <tr valign="middle">
        <td>message</td>
        <td><input type="text" v-model="message"/></td>
      </tr>
      <tr align="center">
        <td colspan="2">
          <miracles-button @click="create" icon="add" type="success">Create Dialog</miracles-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'dialog_demo',
  data () {
    return {
      title: '标题',
      message: '这是一条示例提示内容！'
    }
  },
  methods: {
    create () {
      this.$dialog.create({title: this.title, message: this.message})
    }
  }
}
</script>
