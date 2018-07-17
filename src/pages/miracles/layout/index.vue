<template>
  <div>
    <miracles-container>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">1</miracles-col-md>
      <miracles-col-md :span="4" style="background-color: #80CBC4; height: 100px;">2-5</miracles-col-md>
      <miracles-col-md :span="4" :offset="3" style="background-color: #607D8B; height: 100px;">(6-8) 9-12</miracles-col-md>
    </miracles-container>
    <miracles-container direction="vertical">
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">1</miracles-col-md>
      <miracles-col-md :span="4" style="background-color: #80CBC4; height: 100px;">2-5</miracles-col-md>
      <miracles-col-md :span="4" :offset="3" style="background-color: #607D8B; height: 100px;">(6-8) 9-12</miracles-col-md>
    </miracles-container>
    <miracles-container split>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">1</miracles-col-md>
      <miracles-col-md style="background-color: #F57F17; height: 100px;">2</miracles-col-md>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">3</miracles-col-md>
      <miracles-col-md style="background-color: #F57F17; height: 100px;">4</miracles-col-md>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">5</miracles-col-md>
      <miracles-col-md style="background-color: #F57F17; height: 100px;">6</miracles-col-md>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">7</miracles-col-md>
      <miracles-col-md style="background-color: #F57F17; height: 100px;">8</miracles-col-md>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">9</miracles-col-md>
      <miracles-col-md style="background-color: #F57F17; height: 100px;">10</miracles-col-md>
      <miracles-col-md style="background-color: #03A9F4; height: 100px;">11</miracles-col-md>
      <miracles-col-md style="background-color: #F57F17; height: 100px;">12</miracles-col-md>
    </miracles-container>
    <miracles-container style="margin-top: 20px;" direction="vertical" split>
      <miracles-col-md :span="3" style="background-color: #00C853; height: 100px;">
        <miracles-button icon="refresh">Hello World</miracles-button>
      </miracles-col-md>
      <miracles-col-md :span="3" style="background-color: #F57F17; height: 100px;">2</miracles-col-md>
      <miracles-col-md :span="3" style="background-color: #00C853; height: 100px;">3</miracles-col-md>
    </miracles-container>
  </div>
</template>

<script>
export default {
  name: 'layout_demo'
}
</script>
