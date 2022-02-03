<template>
  <Login :login="login"/>
  <div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="email"><br>
    <input type="password" placeholder="password"><br>
    <button>로그인</button>
    <p>만약 계정이 없다면, 회원가입을 먼저 진행해주세요!</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      login : ''
    }
  },
  methods: {

  },
  components : {
    Login
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 15px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
