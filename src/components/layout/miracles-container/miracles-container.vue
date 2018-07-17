<template>
  <div :class="[currentStyle]" :style="{'flex-direction': currentDirection}"><slot></slot></div>
</template>

<script>
export default {
  name: 'miracles-container',
  props: {
    direction: {
      type: String,
      default: 'horizontal'
    },
    split: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentStyle () {
      return 'miracles-container-' + this.$props.direction + (this.$props.split ? '-split' : '')
    },
    currentDirection () {
      return this.$props.direction === 'horizontal' ? 'row' : this.$props.direction === 'vertical' ? 'column' : 'row'
    }
  }
}
</script>
