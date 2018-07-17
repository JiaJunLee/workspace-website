<template>
  <div :class="[currentSpan, currentOffset]" class="col-md">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'miracles-col-md',
  props: {
    span: {
      type: Number,
      default: 1
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  computed: {
    currentSpan () {
      return 'col-md-' + this.$props.span
    },
    currentOffset () {
      return 'col-md-offset-' + this.$props.offset
    }
  }
}
</script>
