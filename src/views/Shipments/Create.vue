<template>
  <div class="shipment-create">
    <b-container class="courier-rate">
      <h1>UPS Rate: ${{ ups_rate }}</h1>
    </b-container>

    <b-container class="get-rate-shipment-form">
      <form v-on:submit.prevent="submit();">
        <h3 class="col-sm-4">Shipper Address</h3>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Street Address:</label>
          <input type="text" class="form-control col-sm-4" v-model="shipper_address.address_line" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">City:</label>
          <input type="text" class="form-control col-sm-4" v-model="shipper_address.city" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">State:</label>
          <input type="text" class="form-control col-sm-4" v-model="shipper_address.state_code" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Postal Code:</label>
          <input type="text" class="form-control col-sm-4" v-model="shipper_address.postal_code" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Country:</label>
          <input type="text" class="form-control col-sm-4" v-model="shipper_address.country_code" />
        </div>

        <h3 class="col-sm-4">Ship To Address</h3>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Street Address:</label>
          <input type="text" class="form-control col-sm-4" v-model="ship_to_address.address_line" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">City:</label>
          <input type="text" class="form-control col-sm-4" v-model="ship_to_address.city" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">State:</label>
          <input type="text" class="form-control col-sm-4" v-model="ship_to_address.state_code" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Postal Code:</label>
          <input type="text" class="form-control col-sm-4" v-model="ship_to_address.postal_code" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Country:</label>
          <input type="text" class="form-control col-sm-4" v-model="ship_to_address.country_code" />
        </div>

        <h3 class="col-sm-4">Package Info</h3>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Weight</label>
          <input type="text" class="form-control col-sm-4" v-model="packageDimensions.weight" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">UOM:</label>
          <input type="text" class="form-control col-sm-4" v-model="packageDimensions.weightUOM" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Length:</label>
          <input type="text" class="form-control col-sm-4" v-model="packageDimensions.length" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Width:</label>
          <input type="text" class="form-control col-sm-4" v-model="packageDimensions.width" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Height:</label>
          <input type="text" class="form-control col-sm-4" v-model="packageDimensions.height" />
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">UOM:</label>
          <input type="text" class="form-control col-sm-4" v-model="packageDimensions.dimsUOM" />
        </div>
      </form>
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
