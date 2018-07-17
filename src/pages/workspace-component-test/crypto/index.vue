<template>
  <div>
    <miracles-text-field name="username" v-model="username"></miracles-text-field>
    <miracles-text-field name="password" type="password" focus-style="primary" v-model="password"></miracles-text-field>
    <br/><br/>
    <miracles-button type="activity" @click="login">LOGIN</miracles-button>
  </div>
</template>

<script>
export default {
  name: 'crypto',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$loading.show('加载数据')
      let params = {
        username: this.$data.username,
        password: this.$data.password
      }
      setTimeout(() => {
        this.$api.authentication(params).then(
          (data) => {
            console.log(data)
            this.$loading.hidden()
          },
          (fail) => {
            console.log(fail)
          }
        )
      }, 3000)
    }
  }
}
</script>
