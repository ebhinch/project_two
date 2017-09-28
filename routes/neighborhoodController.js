const express = require("express");
const router = express.Router()
const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;

router.get("/", (request, response) => {
    NeighborhoodModel.find({})
      .then((neighborhoods) => {
        response.render("neighborhoods/index", {
          neighborhoods: neighborhoods
        })
      })
      .catch((error) => {
        console.log(error)
      })
})



module.exports = router;
