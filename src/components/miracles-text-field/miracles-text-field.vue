<template>
  <div class="miracles-text-field">
    <label class="miracles-text-field-label"
           :class="[
             {'miracles-text-field-label-focus': onFocus},
             {'miracles-text-field-label-has-value': value.toString().trim() !== ''},
             {'miracles-text-field-label-error': errorMsg !== ''},
             label_focus_style
             ]">
      {{ errorMsg === '' ? name : errorMsg }}
    </label>
    <input spellcheck="false" class="miracles-text-field-input"
           :class="[
             input_style,
             {'miracles-text-field-input-has-value': value.toString().trim() !== ''},
             {'miracles-text-field-input-error': errorMsg !== ''}
             ]"
           :type="type"
           @input="update"
           @focus="onFocus = 1"
           @blur="onFocus = 0"
           @keyup.enter="enter"
           ref="input"
           :value="value"/>
  </div>
</template>

<script>
export default {
  name: 'miracles-text-field',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    focusStyle: {
      type: String,
      default: 'default'
    },
    errorMsg: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onFocus: false,
      hasValue: false
    }
  },
  methods: {
    update () {
      this.$emit('input', this.$refs.input.value)
    },
    enter () {
      if (this.$data.onFocus) {
        this.$refs.input.blur()
        this.$emit('enter')
      }
    }
  },
  computed: {
    label_focus_style () {
      if (this.$data.onFocus) {
        return 'miracles-text-field-label-focus-' + this.$props.focusStyle
      }
    },
    input_style () {
      if (this.$data.onFocus) {
        return 'miracles-text-field-input-focus-' + this.$props.focusStyle
      }
    }
  }
}
</script>
