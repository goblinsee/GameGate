<template>
  <Card>
    <h2>仿生人研究</h2>
    <Tabs value="name1">
      <TabPane :label="label" name="name1">外貌研究</TabPane>
      <TabPane label="性格研究" name="name2">性格研究</TabPane>
      <TabPane label="能力研究" name="name3">能力研究</TabPane>
    </Tabs>
  </Card>
</template>

<script>
export default {
  name: 'Lab',
  data () {
    return {
      label: (h) => {
        return h('div', [
          h('span', '外貌研究'),
          h('Badge', {
            props: {
              count: 3
            }
          })
        ])
      }
    }
  }
}
</script>

<style scoped>

</style>
