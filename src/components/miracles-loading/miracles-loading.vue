<template>
  <div class="miracles-loading-box" :class="{ 'miracles-loading-shadow': shadow }" v-if="isVisible">
    <div class="miracles-loading-text-box">
      <span class="miracles-loading-text">{{ message }}</span>
    </div>
    <ul class="miracles-loading-container">
      <li class="miracles-loading-item"></li>
      <li class="miracles-loading-item"></li>
      <li class="miracles-loading-item"></li>
      <li class="miracles-loading-item"></li>
      <li class="miracles-loading-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'miracles-loading',
  props: {
    shadow: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: ''
    }
  },
  watch: {
    visible (val) {
      this.overflow(val)
    }
  },
  computed: {
    isVisible () {
      this.overflow(this.$props.visible)
      return this.$props.visible
    }
  },
  methods: {
    overflow (val) {
      if (val === true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
    show (message) {
      this.$props.visible = true
      this.$props.message = message
    },
    hidden () {
      this.$props.visible = false
    }
  }
}
</script>
