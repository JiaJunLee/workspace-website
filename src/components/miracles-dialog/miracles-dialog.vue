<template>
  <div class="miracles-dialog">
    <transition name="zoom" v-on:after-leave="afterLeave">
      <div class="miracles-dialog-container" v-show="isVisible">
        <div class="miracles-dialog-header">
          <i class="material-icons miracles-dialog-icon">{{ icon }}</i>
          <span class="miracles-dialog-title">{{ title }}</span>
        </div>
        <div class="miracles-dialog-message" v-if="type==='default'">{{ message }}</div>
        <div class="miracles-dialog-message" v-if="type==='html'">
          <slot name="html">
            <div>Test html document.</div>
          </slot>
        </div>
        <div class="miracles-dialog-bottom">
          <miracles-button-group margin="small">
            <slot name="buttons">
              <miracles-button type="activity" icon_size="small" icon="check" @click="toggle">好的</miracles-button>
            </slot>
          </miracles-button-group>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'miracles-dialog',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    visible: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'arrow_drop_down'
    },
    title: {
      type: String,
      default: '消息'
    },
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isVisible: this.visible
    }
  },
  methods: {
    toggle () {
      this.$data.isVisible = !this.$data.isVisible
    },
    destroy () {
      document.body.style.overflow = 'auto'
      document.body.removeChild(this.$el)
    },
    afterLeave: function (el) {
      this.destroy()
    }
  },
  watch: {
    visible (val) {
      this.$data.isVisible = val
    },
    isVisible (val) {
      if (val) {
        document.body.style.overflow = 'hidden'
      }
    }
  },
  created () {
    if (this.$data.isVisible) {
      document.body.style.overflow = 'hidden'
    }
  }
}
</script>
