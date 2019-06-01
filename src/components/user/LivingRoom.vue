<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="form-class">
      课程 <input type="text" name="course" v-model="course" placeholder="网站制作与管理"> <br>
      教师 <input type="text" name="teacher" v-model="teacher" placeholder="林初建"> <br>
      学号 <input type="text" name="number" v-model="number" placeholder="1612925"> <br>
      姓名 <input type="text" name="name" v-model="name" placeholder="戴瑜灿"> <br>
      <a href="javascript:" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LivingRoom',
  data () {
    return {
      msg: 'This is a test for database connection.',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser () {
      var name = this.username
      var password = this.password
      this.$http.post('/api/user/addUser', {
        username: name,
        password: password
      }, {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
<style scoped>
.form-class {
  height: 100px;
  margin-top: 20px;
}
</style>
