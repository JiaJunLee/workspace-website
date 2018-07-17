<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <div class="dashboard-header-left">
        <el-popover placement="top">
          <div style="width: 150px; display: flex; flex-direction: column; padding: 6px 0;">
            <miracles-button-group direction="vertical" margin="small">
              <miracles-button text-size="small">setting</miracles-button>
              <miracles-button text-size="small" @click="logout">logout</miracles-button>
            </miracles-button-group>
          </div>
          <workspace-imagebox slot="reference" width="60" height="60" :offset="[-90, -58, -10, -138, -10, -58]" button v-if="iconFileId === undefined || iconFileId === ''"></workspace-imagebox>
          <div slot="reference" v-else class="user-icon" :style="{ backgroundImage: user_icon_url }"></div>
        </el-popover>
        <workspace-imagebox width="217" height="28" :offset="[-10, -10, -10, -10, -10, -10]" button id="workspace-logo"></workspace-imagebox>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">Welcome {{ userName }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/dashboard' }">{{ firstTeam }}</el-breadcrumb-item>
        <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="dashboard-header-right">
        <workspace-search-box></workspace-search-box>
        <workspace-imagebox width="26" height="24" :offset="[-102, -218, -148, -218, -247, -102]" button class="header-button"></workspace-imagebox>
        <workspace-imagebox width="26" height="24" :offset="[-194, -218, -240, -218, -293, -10]" button class="header-button"></workspace-imagebox>
        <workspace-imagebox width="26" height="24" :offset="[-247, -146, -10, -218, -56, -218]" button class="header-button"></workspace-imagebox>
      </div>
    </div>
    <!--dashboard content view-->
    <router-view></router-view>
  </div>
</template>

<script>
import './index.scss'
export default {
  name: 'dashboard',
  data () {
    return {
      userName: this.$store.state.userEntity['name'],
      firstTeam: this.$store.state.teams[0]['name'],
      iconFileId: this.$store.state.userEntity['icon_file_id']
    }
  },
  computed: {
    user_icon_url () {
      return `url(https://localhost:444/source/${this.$data.iconFileId})`
    }
  },
  methods: {
    logout () {
      this.$store.state.userEntity = null
      this.$store.state.teams = null
      this.$store.state.projects = null
      this.$router.push('/login')
    }
  }
}
</script>
