
<template>
  <div class="miracles-button-box" :class="[ button_style, { 'disable': disable } ]" @click="handleClick">
    <span class="miracles-button-text" :class="[ button_text_style ]">
      <div :class="[ button_loading_style ]" v-if="loading"></div>
      <i class="miracles-button-icon material-icons" v-if="icon" :class="[ button_icon_style, button_icon_size_style ]">{{ icon }}</i>
      <slot></slot>
    </span>
  </div>
</template>

<script>

export default {
  name: 'miracles-button',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    icon_size: {
      type: String,
      default: 'normal'
    },
    text_size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    button_style () {
      return 'miracles-button-style-' + this.$props.type
    },
    button_loading_style () {
      return this.$props.type === 'default' ? 'miracles-button-deep-loading-box' : 'miracles-button-light-loading-box'
    },
    button_icon_style () {
      return this.$props.type === 'default' ? 'icon-dark' : 'icon-light'
    },
    button_icon_size_style () {
      switch (this.$props.icon_size) {
        case 'small': return 'icon-md-14'
        case 'large': return 'icon-md-36'
        case 'normal': default: return 'icon-md-22'
      }
    },
    button_text_style () {
      return 'miracles-button-text-' + this.$props.text_size
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}

</script>
