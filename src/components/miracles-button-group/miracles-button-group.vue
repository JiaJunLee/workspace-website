<template>
  <div :class="[ button_group_style, { 'miracles-button-group-border': border }, button_group_direction_style ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'miracles-button-group',
  props: {
    margin: {
      type: String,
      default: 'normal'
    },
    border: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    list: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    button_group_style () {
      switch (this.$props.margin) {
        case 'small':
          return 'miracles-button-group-small-' + this.$props.direction + (this.$props.list ? '-list' : '')
        case 'large':
          return 'miracles-button-group-large-' + this.$props.direction + (this.$props.list ? '-list' : '')
        case 'normal':
        default:
          return 'miracles-button-group-normal-' + this.$props.direction + (this.$props.list ? '-list' : '')
      }
    },
    button_group_direction_style () {
      return this.$props.direction === 'horizontal' ? 'miracles-button-group-direction-horizontal' : 'miracles-button-group-direction-vertical'
    }
  }
}
</script>
