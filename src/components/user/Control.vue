<template>
  <Card>
    <h2>仿生人管理</h2>
    <Button @click="add">创建仿生人</Button>
    <Button>改造仿生人</Button>
    <Transfer
      v-if="on_add"
      :data="data3"
      :target-keys="targetKeys3"
      :list-style="listStyle"
      :render-format="render3"
      :operations="['放回','加入']"
      filterable
      @on-change="handleChange3">
      <div :style="{float: 'right', margin: '5px'}">
        <Button size="big" @click="reloadMockData">Refresh</Button>
      </div>
    </Transfer>
  </Card>
</template>

<script>
export default {
  name: 'Control',
  data () {
    return {
      on_add: false,
      data3: this.getMockData(),
      targetKeys3: this.getTargetKeys(),
      listStyle: {
        width: '300px',
        height: '450px'
      }
    }
  },
  methods: {
    add () {
      if (this.on_add) {
        this.on_add = false
      } else this.on_add = true
    },
    getMockData () {
      let mockData = []
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: 'Content ' + i,
          description: '材料  ' + i,
          disabled: Math.random() * 3 < 1
        })
      }
      return mockData
    },
    getTargetKeys () {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map(item => item.key)
    },
    handleChange3 (newTargetKeys) {
      this.targetKeys3 = newTargetKeys
    },
    render3 (item) {
      return item.label + ' - ' + item.description
    },
    reloadMockData () {
      this.data3 = this.getMockData()
      this.targetKeys3 = this.getTargetKeys()
    }
  }
}
</script>
