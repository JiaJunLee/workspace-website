<template>
  <div style="width: 600px; margin-left: 100px;">
    <miracles-text-field name="username" v-model="text_value"></miracles-text-field>
    <miracles-text-field name="password" type="password" focus-style="primary" v-model="text_value"></miracles-text-field>
    <miracles-text-field name="text field" focus-style="warning" v-model="text_value"></miracles-text-field>
    <miracles-text-field name="text field" focus-style="success" v-model="text_value"></miracles-text-field>
    <miracles-text-field name="text field" focus-style="error" v-model="text_value"></miracles-text-field>
  </div>
</template>

<script>
export default {
  name: 'text-field_demo',
  data () {
    return {
      text_value: ''
    }
  }
}
</script>
