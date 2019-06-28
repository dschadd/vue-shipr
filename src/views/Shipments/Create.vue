<template>
  <div class="home">
    <h1>{{ ups_rate }}</h1>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      ups_rate: "",
      ups_body: {}
    };
  },
  created: function() {
    function upsRateGetter() {
      var headers = {
        "Username": "${process.env.VUE_APP_UPS_EMAIL}",
        "Password": "${process.env.VUE_APP_UPS_PASSWORD}", 
        "AccessLicenseNumber": "${process.env.VUE_APP_API_KEY}"
      };
      var body = this.ups_body;
      axios.post(
        "https://wwwcie.ups.com/ship/v1801/rating/Shop",
        headers,
        body
      ).then(response => {
        this.ups_rate = response.data;
      });
    }
    
  },
  methods: {},
  computed: {}
};
</script>