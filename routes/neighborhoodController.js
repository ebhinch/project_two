const express = require("express");
const router = express.Router();
const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;
const PendingNeighborhoodModel = Schema.PendingNeighborhoodModel;

router.get("/", (request, response) => {

    NeighborhoodModel.find({approved: true})
      .then((neighborhoods) => {
        response.render("neighborhoods/index", {
          neighborhoods: neighborhoods
        })
      })
      .catch((error) => {
        console.log(error)
      })
})

//NEW
router.get("/new", (request, response) => {
  response.render("neighborhoods/new")
})

//CREATE
router.post("/", (request, response) => {
  const newNeighborhood = request.body;
  newNeighborhood.approved = false;
  NeighborhoodModel.create(newNeighborhood)
    .then(() => {
      response.redirect("/neighborhoods")
    })
    .catch((error) => {
      console.log(error)
    })
})



module.exports = router;

