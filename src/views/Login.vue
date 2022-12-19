<template>
  <div style="width: 40vw;margin: auto;">
    <div class="mt-5">
      <h1>用户登录</h1>
    </div>
    <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
            v-decorator="[
          'email',
          { rules: [
            { required: true, message: '请输入邮箱!' },
            {
              pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
              message: '邮箱格式不正确',
            }
            ] },
        ]"
            placeholder="email"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ]"
            type="password"
            placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        >
          记忆登录
        </a-checkbox>
        <a class="login-form-forgot" href="">
          忘记密码
        </a>
        <a-button type="primary" html-type="submit" class="login-form-button">
         登录
        </a-button>
        Or
        <a href="">
          用户注册!
        </a>
      </a-form-item>
    </a-form>

  </div>

</template>

<script>

export default {
  name: "Login",
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          //访问 vuex 中的 action-> 访问后端接口
          this.$store.dispatch('user/login', values).then(() => {
            this.$message.info('登录成功');
            this.$router.push({name: 'home'});
          }).catch(() => {
            this.$message.error("登录失败");
          });
        }
      });
    },
  },
}
</script>

<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>