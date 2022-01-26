<template>
  <div class="hello">
    <h1>
      세미콜론 커뮤니티에 오신 여러분을 환영합니다!<br>
    </h1>
    <div v-if="user.isLogin">{{user.userNickname}}({{user.userName}})님, <span v-html="user.greetingHtml"></span></div>
    <div v-else>다양한 서비스를 즐기기 위해 회원가입을 진행해주세요.</div>

    <form
        id="Signupapp"
        @submit="SignUpForm"
        method="post">
      <br>
      <div>
        <label for="email" id="email">이메일(Email) </label>
        <input type="text" ref="email_Id"/> @ <input type="text" ref="email_Domain">
        &nbsp;
<!--        <email-form-input id="email" type="email">-->
<!--          <select name="emaildomain" @change="emaildomainCheck">-->
<!--            <option disabled value = "">이메일을 선택해주세요</option>-->
<!--            <option value = "직접입력" >직접입력</option>-->
<!--            <option value = "naver.com" >naver.com</option>-->
<!--            <option value = "kakao.com" >kakao.com</option>-->
<!--            <option value = "gmail.com" >gmail.com</option>-->
<!--            <option value = "hanmail.net" >hanmail.net</option>-->
<!--          </select>-->
<!--        </email-form-input>-->
        <v-text-field class="pl-3 pr-3" :rules="emailRulesCheck" required v-model="signup.email"
                      label="E-mail" type="email" prepend-icon="mdi-email">
        </v-text-field>
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
      <button type="button" @click="SubmitButtonClick">회원가입 </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'SignupForm',
  data() {
    return {
      user: {
        userNickname: 'JeonJongYook#1352',
        userName: '종욱',
        greetingHtml : '<span style="color:#0a45c7">안녕하세요.</span>',
        isLogin : false
      },
      signup: {
        email_Id: '',
        email_Domain: '',
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
    clearEmail() {
      this.signup.email_Id = '';
      this.signup.email_Domain = '';
    },
    emailRulesCheck: {

    }
  },
  computed: {
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
