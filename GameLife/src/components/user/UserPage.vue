<template>
  <Layout>
    <Sider>
      <Menu :theme="light" active-name="1">
        <MenuGroup title="家">
          <menu-item name="1" to="/lab">
            <Icon type="ios-paper"/>
            实验室
          </menu-item>
          <menu-item name="2" to="/live">
            <Icon type="ios-people"/>
            起居室
          </menu-item>
          <menu-item name="3" to="/farm">
            <Icon type="ios-construct"/>
            培育室
          </menu-item>
        </MenuGroup>
        <MenuGroup title="外出">
          <menu-item name="4">购物</menu-item>
          <menu-item name="5">比赛</menu-item>
          <menu-item name="6">聚会</menu-item>
          <menu-item name="7">探索</menu-item>
          <menu-item name="8">采集</menu-item>
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
