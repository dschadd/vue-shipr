<template>
  <div class="login">
    <body class="text-center">
      <form class="form-signin" v-on:submit.prevent="submit();">
        <!--
          TODO: Put shipr logo here
          <img
            class="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          />
        -->
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          v-model="email"
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          v-model="password"
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <!--
          Figure out how to make this work.
          <div class="checkbox mb-3">
            <label> <input type="checkbox" value="remember-me" /> Remember me </label>
          </div>
        -->
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </body>
  </div>
</template>

<style>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

<script>
import axios from "axios";

export default {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("http://localhost:3000/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/dashboard");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
