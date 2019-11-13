<template>
  <div class="login-container">
    <div class="form-group">
      <label for="UserName">username:</label>
      <input
        name="UserName"
        v-model="username"
        v-validate="'required'"
        placeholder="Enter your username"
      />
      <p class="app-error" v-if="pageErrors.has('UserName')">{{pageErrors.first('UserName')}}</p>
    </div>
    <div class="form-group">
      <label>password:</label>
      <input
        v-model="password"
        type="password"
        name="password"
        v-validate="'required'"
        placeholder="************"
      />
      <p class="app-error" v-if="pageErrors.has('password')">{{pageErrors.first('password')}}</p>
    </div>
    <div class="form-group">
      <input
        type="button"
        value="ورود"
        name="btnLogin"
        :disabled="isAuthorized"
        @click="loginEventHandler"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      password: "",
      username: ""
    };
  },
  computed: {
    isAuthorized() {
      return  this.$store.state.product.authorized;
    }
  },
  methods: {
    loginEventHandler() {
      this.$validator.validateAll().then(isvalid => {
        if (isvalid) {
          this.$store.dispatch("LoginUser", {
            username: this.username,
            password: this.password
          });

          const url = this.$route.query.redirect || "/";
          this.$router.push(url);
        }
      });
    }
  }
};
</script>