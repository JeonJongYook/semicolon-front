<template>
  <div class="hello">
    <h1>
      세미콜론 커뮤니티에 오신 여러분을 환영합니다!<br>
    </h1>

    <form
        id="Signupapp"
        @submit="submitForm"
        method="post">
      <br>
      <div>
        <label for="email" id="email">이메일(Email) </label>
        <input type="text" ref="emailinput"/> @ <input type="text" name="e_domain">
        &nbsp;
        <email-form-input id="email" v-model="email" type="email" :state="emailValidation">
          <select name="emaildomain" onchange="emaildomainCheck();" v-model="selected">
            <option disabled value = "">이메일을 선택해주세요</option>
            <option value = "직접입력">직접입력</option>
            <option value = "naver.com">naver.com</option>
            <option value = "kakao.com">kakao.com</option>
            <option value = "gmail.com">gmail.com</option>
            <option value = "hanmail.net">hanmail.net</option>
          </select>
        </email-form-input>
      </div>
      <br>
      <div>
        <label for="nickname">닉네임(Nickname) </label>
        <input type="text" id="nickname" v-model="signup.nickname" /> <button type="submit" name="confirmcheckbutton">중복체크 </button>
      </div>
      <br>
      <div>
        <label for="password" name="Password">비밀번호(Password) </label>
        <input type="password" id="password" v-model="signup.password" />
      </div>
      <br>
      <div>
        <label for="passwordConfirm" name="PasswordConfirm">비밀번호 확인(Password Confirm) </label>
        <input type="password" id="passwordConfirm" v-model="signup.passwordConfirm" />
      </div>
      <br>
      <br>
      <button type="submit">회원가입 </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'SignupForm',
  data() {
    return {
      email: {
      },
      signup: {
        emailId: '',
        emaildomain: '',
        nickname: '',
        password: '',
        passwordConfirm: ''
      },
      login: {
        email: '',
        nickname: '',
        password: ''
      },
    };
  },
  methods: {
    goLoginPage() {
      var email = this.$refs.emailinput.value;
      var password = this.$refs.password.value;
      var passwordConfirm = this.$refs.passwordConfirm.value;
      axios.post('/login', {
        emailId: email,
        password: password,
        passwordConfirm: passwordConfirm
      });
    },
  },
  computed: {
    emailValidation: function() {
      return this.signup.email.length > 10 ? `` : `이메일은 10자 이상 입력해주세요!`;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle&family=Mochiy+Pop+P+One&display=swap');

* {
  align-items: center;
}

emailv {
  color: aqua;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
