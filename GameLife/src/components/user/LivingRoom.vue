<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      如何称呼您？<input type="text" name="ownName" v-model="ownName"> <br>
      您孩子的姓名？<input type="text" name="childName" v-model="childName"> <br>
      <a href="javascript:" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LivingRoom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
