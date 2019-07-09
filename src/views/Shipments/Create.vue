<template>
  <div class="shipment-create">
    <h1>{{ ups_rate }}</h1>
    <div class="form-group">
      <label>Name:</label>
      <input type="text" class="form-control" v-model="name" />
    </div>
  </div>
</template>

<style>
</style>

<script>

import axios from "axios";

export default {
  data: function() {
    return {
      ups_rate: {},
    };
  },
  created: function() {

    console.log("is this thing on");  

  },
  methods: {},
  computed: {}
};
</script>