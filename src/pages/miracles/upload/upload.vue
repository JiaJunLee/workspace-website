<template>
  <div style="width: 500px;">
    <miracles-file-input @change="change"></miracles-file-input>
    <miracles-button @click="upload">upload</miracles-button>
  </div>
</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      file: null
    }
  },
  methods: {
    change (file) {
      this.$data.file = file
    },
    upload () {
      this.$api.upload(this.$data.file).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
