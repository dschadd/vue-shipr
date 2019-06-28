<template>
  <div class="home">
    <h1>{{ consignees }}</h1>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      ups_body: {}
    };
  },
  created: function() {
    function upsRateGetter() {
      var headers = {};
      var body = this.ups_body;
      axios.post(
        "https://wwwcie.ups.com/ship/v1801/rating/Shop",
        headers,
        body
      ).then(response => {
        this.consignees = response.data;
      });
    }
    
  },
  methods: {},
  computed: {}
};
</script>