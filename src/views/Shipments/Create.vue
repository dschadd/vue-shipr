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
      shipper_address: {
        address_line: "",
        city: "",
        state_code: "",
        postal_code: "",
        country_code: ""
      },
      ship_to_address: {
        address_line: "",
        city: "",
        state_code: "",
        postal_code: "",
        country_code: ""
      },
      // This logic needs to be abstracted - it will live in the back end until I get 
      // a basic rate request working for different addresses.
      // "Package": {
      //   "PackagingType": {
      //     "Code": "02"
      //   },
      //   "Dimensions": {
      //     "UnitOfMeasurement": {
      //       "Code": "IN"
      //     },
      //     "Length": "5",
      //     "Width": "4",
      //     "Height": "3"
      //   },
      //   "PackageWeight": {
      //     "UnitOfMeasurement": {
      //       "Code": "Lbs",
      //       "Description": "pounds"
      //     },
      //     "Weight": "1"
      //   }
    };
  },
  created: function() {

    console.log("is this thing on");  

  },
  methods: {},
  computed: {}
};
</script>