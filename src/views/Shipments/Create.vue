<template>
  <div class="shipment-create">
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
      ups_rate: {},
      // I can refactor the ups_body variable to smaller objects
      ups_body: {
        "RateRequest": {
          "Shipment": {
            "Shipper": {
              "Address": {
                "AddressLine": "569 Yarmouth Rd",
                "City": "Elk Grove Village",
                "StateProvinceCode": "IL",
                "PostalCode": "60007",
                "CountryCode": "US"
              }
            },
            "ShipTo": {
              "Address":{
                "AddressLine": "500 Dogwood Trl",
                "City": "Elk Grove Village",
                "StateProvinceCode": "IL",
                "PostalCode": "60007",
                "CountryCode": "US"
              }
            },
            "Package": {
              "PackagingType": {
                "Code": "02"
              },
              "Dimensions": {
                "UnitOfMeasurement": {
                  "Code": "IN"
                },
                "Length": "5",
                "Width": "4",
                "Height": "3"
              },
              "PackageWeight": {
                "UnitOfMeasurement": {
                  "Code": "Lbs",
                  "Description": "pounds"
                },
                "Weight": "1"
              }
            }
          }
        }
      }
    };
  },
  created: function() {
    function upsRateGetter() {
      // Git ignore is not ignoring my API.env file. Needs to be fixed ASAP.
      // Axios is not making the request for some reason. I assuming it is because of the formatting.
      var upsHeaders = {
        "Username": "dschadd@gmail.com",
        "Password": "grens111*", 
        "AccessLicenseNumber": "9D6385C312E099B5"
      };
      var body = this.ups_body;
      axios({
        url: "https://wwwcie.ups.com/ship/v1801/rating/Shop",
        method: 'post',
        headers: upsHeaders,
        data: {
          "RateRequest": {
            "Shipment": {
              "Shipper": {
                "Address": {
                  "AddressLine": "569 Yarmouth Rd",
                  "City": "Elk Grove Village",
                  "StateProvinceCode": "IL",
                  "PostalCode": "60007",
                  "CountryCode": "US"
                }
              },
              "ShipTo": {
                "Address":{
                  "AddressLine": "500 Dogwood Trl",
                  "City": "Elk Grove Village",
                  "StateProvinceCode": "IL",
                  "PostalCode": "60007",
                  "CountryCode": "US"
                }
              },
              "Package": {
                "PackagingType": {
                  "Code": "02"
                },
                "Dimensions": {
                  "UnitOfMeasurement": {
                    "Code": "IN"
                  },
                  "Length": "5",
                  "Width": "4",
                  "Height": "3"
                },
                "PackageWeight": {
                  "UnitOfMeasurement": {
                    "Code": "Lbs",
                    "Description": "pounds"
                  },
                  "Weight": "1"
                }
              }
            }
          }
        }
      }).then(function(response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      });
    }
    
  },
  methods: {},
  computed: {}
};
</script>