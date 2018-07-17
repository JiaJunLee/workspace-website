<template>
  <span class="ws-imagebox"
       :style="{ 'background-position': background_position, 'width': width + 'px', 'height': height + 'px' }"
       :class="{ 'ws-imagebox-button': button }"
       @mouseenter="mouse_hover"
       @mouseleave="mouse_leave"
       @mousedown="mouse_down"
       @mouseup="mouse_hover"
       @click="handleClick">
  </span>
</template>

<script>
export default {
  name: 'workspace-imagebox',
  props: {
    width: {
      type: String,
      default: '0'
    },
    height: {
      type: String,
      default: '0'
    },
    offset: {
      type: Array,
      default: () => { return [] }
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentOffsetX: 0,
      currentOffsetY: 0
    }
  },
  computed: {
    background_position () {
      return this.currentOffsetX + 'px ' + this.currentOffsetY + 'px'
    }
  },
  methods: {
    mouse_hover () {
      if (this.$props.button) {
        this.currentOffsetX = this.$props.offset[2]
        this.currentOffsetY = this.$props.offset[3]
      }
    },
    mouse_leave () {
      this.currentOffsetX = this.$props.offset[0]
      this.currentOffsetY = this.$props.offset[1]
    },
    mouse_down () {
      if (this.$props.button) {
        this.currentOffsetX = this.$props.offset[4]
        this.currentOffsetY = this.$props.offset[5]
      }
    },
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  created: function () {
    this.mouse_leave()
  }
}
</script>
