<template>
  <div>
    <workspace-imagebox width="60" height="60" :offset="[-10, -58, -90, -58, -10, -138]" button></workspace-imagebox>
    <workspace-imagebox width="217" height="28" :offset="[-10, -10, -10, -10, -10, -10]" button></workspace-imagebox>
    <workspace-imagebox width="26" height="24" :offset="[-90, -138, -170, -58, -136, -138]" button></workspace-imagebox>
    <workspace-imagebox width="26" height="24" :offset="[-182, -138, -247, -10, -247, -54]" button></workspace-imagebox>
    <workspace-imagebox width="26" height="24" :offset="[-247, -98, -247, -142, -10, -218]" button></workspace-imagebox>
  </div>
</template>

<script>
export default {
  name: 'imagebox-demo'
}
</script>
