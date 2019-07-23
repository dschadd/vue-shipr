<template>
  <div class="home"></div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      consignees: ""
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/consignees").then(response => {
      this.consignees = response.data;
    });
  },
  methods: {},
  computed: {}
};
</script>
