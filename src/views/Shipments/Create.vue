<template>
  <div class="shipment-create">
    <form v-on:submit.prevent="submit();">
      <h1>{{ shipper_address }}</h1>
      <div class="form-group">
        <label>Street Address:</label> <input type="text" class="form-control" v-model="shipper_address.address_line" />
      </div>
      <div class="form-group">
        <label>City:</label> <input type="text" class="form-control" v-model="shipper_address.city" />
      </div>
      <div class="form-group">
        <label>Postal Code:</label> <input type="text" class="form-control" v-model="shipper_address.postal_code" />
      </div>
      <div class="form-group">
        <label>State:</label> <input type="text" class="form-control" v-model="shipper_address.state_code" />
      </div>
      <div class="form-group">
        <label>Country:</label> <input type="text" class="form-control" v-model="shipper_address.country_code" />
      </div>

      <h1>{{ ship_to_address }}</h1>
      <div class="form-group">
        <label>Street Address:</label> <input type="text" class="form-control" v-model="ship_to_address.address_line" />
      </div>
      <div class="form-group">
        <label>City:</label> <input type="text" class="form-control" v-model="ship_to_address.city" />
      </div>
      <div class="form-group">
        <label>Postal Code:</label> <input type="text" class="form-control" v-model="ship_to_address.postal_code" />
      </div>
      <div class="form-group">
        <label>State:</label> <input type="text" class="form-control" v-model="ship_to_address.state_code" />
      </div>
      <div class="form-group">
        <label>Country:</label> <input type="text" class="form-control" v-model="ship_to_address.country_code" />
      </div>
    </form>

    <button v-on:click="getRate();" class="btn btn-primary">Create</button>
  </div>
</template>

<style></style>

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
      }
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
  methods: {
    // Possible to turn this into a separate service?
    getRate: function() {
      var params = {
        shipper_address: this.shipper_address,
        ship_to_address: this.ship_to_address
      };
      axios.post("http://localhost:3000/api/rates", params).then(
        function(response) {
          console.log(response);
        }.bind(this)
      );
    }
  },
  computed: {}
};
</script>
