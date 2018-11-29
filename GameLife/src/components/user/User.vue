<template>
  <Layout>
    <Sider :style="{background: '#fff'}">
      <Menu :theme="light" width="auto" active-name="1">
        <menu-item name="1" to="/live">
          <Icon type="md-people"/>
          仿真人信息
        </menu-item>
        <menu-item name="2" to="/control">
          <Icon type="md-egg"/>
          控制中心
        </menu-item>
        <menu-item name="3" to="/lab">
          <Icon type="md-beaker"/>
          实验室
        </menu-item>
        <menu-item name="4">
          <Icon type="md-list-box"/>
          计划
        </menu-item>
        <menu-item name="5">
          <Icon type="md-basket"/>
          采购
        </menu-item>
        <menu-item name="6" v-show=false>
          <Icon type="md-ribbon"/>
          竞技场
        </menu-item>
      </Menu>
    </Sider>
    <Content>
      <router-view>
      </router-view>
    </Content>
  </Layout>
</template>
<script>
export default {
  name: 'User',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
