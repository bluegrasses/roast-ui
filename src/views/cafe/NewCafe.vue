<template>
  <div class="lay">
    <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
            v-decorator="[
          'name',
          { rules: [{ required: true, message: 'Please input your name!' }] },
        ]"
            placeholder="name"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
            v-decorator="[
          'address',
          { rules: [{ required: true, message: 'Please input your address!' }] },
        ]"
            placeholder="address"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
            v-decorator="[
          'city',
          { rules: [{ required: true, message: 'Please input your city!' }] },
        ]"
            placeholder="city"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
            v-decorator="[
          'state',
          { rules: [{ required: true, message: 'Please input your state!' }] },
        ]"
            placeholder="state"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
            v-decorator="[
          'zip',
          { rules: [{ required: true, message: 'Please input your zip!' }] },
        ]"
            placeholder="zip"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        提交
      </a-button>

    </a-form>
  </div>
</template>

<script>
export default {
  name: "NewCafe",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('new cafe Received values of form: ', values);
          this.$store.dispatch('cafes/addCafe', values);
          //页面跳转
          this.$router.push('/home');
        }
      });
    },
  },
}
</script>

<style scoped>
.lay{
  width: 50vw;
  margin: auto;
}
</style>