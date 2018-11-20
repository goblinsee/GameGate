<template>
  <Menu mode="horizontal" theme="light" active-name="1">
    <div class="layout-logo"></div>
    <div class="layout-nav">
    </div>
  </Menu>
</template>

<script>
export default {
  name: 'Authen'
}
</script>

<style scoped>
  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
</style>
