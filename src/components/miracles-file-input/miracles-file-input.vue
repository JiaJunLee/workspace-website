<template>
  <div class="file-input-container">
    <div class="left">
      <i class="icon material-icons" v-if="currentFileName===''">account_circle</i>
      <img class="file-input-icon" ref="image" v-else/>
    </div>
    <div class="middle">
      {{ currentFileName }}
    </div>
    <div class="right">
      <input class="file-input" type="file" @change="fileChanged"/>
      <miracles-button class="file-input-select-button">
        <slot>SELECT</slot>
      </miracles-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'miracles-file-input',
  data () {
    return {
      currentFileName: ''
    }
  },
  methods: {
    fileChanged (event) {
      let file = event.target.files[0]
      this.$emit('change', file)
      if (file !== undefined) {
        this.$data.currentFileName = file.name
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (callback) => {
          this.$refs.image.src = callback.target.result
        }
      }
    }
  }
}
</script>
