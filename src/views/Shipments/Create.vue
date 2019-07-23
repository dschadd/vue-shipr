<template>
  <div class="shipment-create">
    <b-container class="courier-rate">
      <h1>UPS Rate: ${{ ups_rate }}</h1>
    </b-container>

    <b-container class="get-rate-shipment-form">
      <b-row align-v="start">
        <form v-on:submit.prevent="submit();">
          <h1>Shipper Address</h1>
          <div class="form-group">
            <label>Street Address:</label>
            <input type="text" class="form-control" v-model="shipper_address.address_line" /> <label>City:</label>
            <input type="text" class="form-control" v-model="shipper_address.city" /> <label>State:</label>
            <input type="text" class="form-control" v-model="shipper_address.state_code" /> <label>Postal Code:</label>
            <input type="text" class="form-control" v-model="shipper_address.postal_code" /> <label>Country:</label>
            <input type="text" class="form-control" v-model="shipper_address.country_code" />
          </div>

          <h1>Ship To Address</h1>
          <div class="form-group">
            <label>Street Address:</label>
            <input type="text" class="form-control" v-model="ship_to_address.address_line" /> <label>City:</label>
            <input type="text" class="form-control" v-model="ship_to_address.city" /> <label>State:</label>
            <input type="text" class="form-control" v-model="ship_to_address.state_code" /> <label>Postal Code:</label>
            <input type="text" class="form-control" v-model="ship_to_address.postal_code" /> <label>Country:</label>
            <input type="text" class="form-control" v-model="ship_to_address.country_code" />
          </div>

          <div>
            <h1>Package Info</h1>
            <div class="form-group">
              <label>Weight</label> <input type="text" class="form-control" v-model="packageDimensions.weight" />
              <label>UOM:</label> <input type="text" class="form-control" v-model="packageDimensions.weightUOM" />
              <label>Length:</label> <input type="text" class="form-control" v-model="packageDimensions.length" />
              <label>Width:</label> <input type="text" class="form-control" v-model="packageDimensions.width" />
              <label>Height:</label> <input type="text" class="form-control" v-model="packageDimensions.height" />
              <label>UOM:</label> <input type="text" class="form-control" v-model="packageDimensions.dimsUOM" />
            </div>
          </div>
        </form>
      </b-row>
    </b-container>
    <button v-on:click="getRate();" class="btn btn-primary">Get Rate!</button>
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
      },
      packageDimensions: {
        weight: "",
        weightUOM: "",
        length: "",
        width: "",
        height: "",
        dimsUOM: ""
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
        ship_to_address: this.ship_to_address,
        packageDimensions: this.packageDimensions
      };
      axios.post("http://localhost:3000/api/rates", params).then(
        function(response) {
          console.log(response.data.ups.RateResponse.RatedShipment[0].TotalCharges.MonetaryValue);
          this.ups_rate = response.data.ups.RateResponse.RatedShipment[0].TotalCharges.MonetaryValue;
        }.bind(this)
      );
    }
  },
  computed: {}
};
</script>
