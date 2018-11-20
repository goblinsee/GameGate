<template>
  <Layout>
    <Sider :style="{background: '#fff'}">
      <Menu :theme="light" width="auto" active-name="1">
        <MenuGroup title="家" Icon="md-home">
          <menu-item name="1" to="/live">
            <Icon type="md-people"/>
            起居室
          </menu-item>
          <menu-item name="2" to="/lab">
            <Icon type="md-beaker"/>
            实验室
          </menu-item>
          <menu-item name="3" to="/farm">
            <Icon type="md-egg"/>
            培育室
          </menu-item>
        </MenuGroup>
        <MenuGroup title="外出" Icon="md-cloudy-night">
          <menu-item name="4">
            <Icon type="md-basket"/>
            购物
          </menu-item>
          <menu-item name="5">
            <Icon type="md-ribbon"/>
            赛事
          </menu-item>
          <menu-item name="6">
            <Icon type="md-wine"/>
            聚会
          </menu-item>
          <menu-item name="7">
            <Icon type="md-bonfire"/>
            探索
          </menu-item>
        </MenuGroup>
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
  name: 'UserPage',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
