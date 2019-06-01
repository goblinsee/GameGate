<template>
  <div id="app">
    <Layout>
      <Authen></Authen>
      <Content>
        <router-view/>
      </Content>
      <Footer>2018-2019 &copy; dyc</Footer>
    </Layout>
  </div>
</template>

<script>
import Authen from '@/components/Authen'
export default {
  name: 'App',
  components: {
    Authen
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
