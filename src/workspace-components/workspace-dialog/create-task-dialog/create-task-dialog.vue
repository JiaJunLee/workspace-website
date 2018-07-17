<template>
  <miracles-dialog :visible="isVisible" type="html" :title="title" icon="view_week">
    <div slot="html">
      <div class="create-task-dialog-container">
        <div class="inline-box">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 10}"
            placeholder="Task Content"
            v-model="content">
          </el-input>
        </div>
        <!--<div class="inline-box">-->
          <!--<span class="text">Visibility: </span>-->
          <!--<el-switch-->
            <!--v-model="visibility"-->
            <!--active-text="Private"-->
            <!--inactive-text="Public">-->
          <!--</el-switch>-->
        <!--</div>-->
        <div class="inline-box">
          <el-date-picker
            v-model="expiry"
            type="datetime"
            placeholder="Expiry Date Time"
            value-format="yyyy-MM-dd HH:mm:ss" style="width: 100%;">
          </el-date-picker>
        </div>
        <div class="inline-box">
          <el-radio-group v-model="type" size="small">
            <el-radio-button label="Normal"></el-radio-button>
            <el-radio-button label="Warning"></el-radio-button>
            <el-radio-button label="Primary"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
    </div>
    <div slot="buttons">
      <miracles-button icon_size="small" icon="close" @click="toggle" style="margin-right: 12px;">Cancel</miracles-button>
      <miracles-button icon_size="small" icon="check" style="margin-right: 12px;" type="activity" @click="on_create">Create</miracles-button>
    </div>
  </miracles-dialog>
</template>

<script>
export default {
  name: 'create-task-dialog',
  data () {
    return {
      title: 'Create Task Item',
      isVisible: false,
      content: '',
      expiry: '',
      type: 'Normal'
    }
  },
  methods: {
    toggle () {
      this.$data.isVisible = !this.$data.isVisible
    },
    on_create () {
      this.submit ({
        content: this.$data.content,
        expiry: this.$data.expiry,
        type: this.$data.type === 'Normal' ? '0' : this.$data.type === 'Warning' ? '1' : '2'
      })
      this.toggle()
    }
  }
}
</script>
