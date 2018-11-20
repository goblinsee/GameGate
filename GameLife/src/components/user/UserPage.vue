<template>
  <Layout>
    <Sider>
      <Menu :theme="light" active-name="1">
        <MenuGroup title="家">
          <menu-item name="1">
            <Icon type="ios-paper"/>
            厨房
          </menu-item>
          <menu-item name="2">
            <Icon type="ios-people"/>
            客厅
          </menu-item>
          <menu-item name="3" to="/farm">
            <Icon type="ios-construct"/>
            农场
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
