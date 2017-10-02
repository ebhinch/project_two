//admin controller will containe code for sites beginning with "/admins". this is where admins will approve pending neighborhoods

const express = require('express')
const router = express.Router({ mergeParams: true })


const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;
// const PendingNeighborhoodModel = Schema.PendingNeighborhoodModel;

//INDEX
//happening index route
router.get("/", (request, response) => {
    NeighborhoodModel.find({ approved: false })
        .then((neighborhoods) => {
            response.render("admins/index", {
                neighborhoods: neighborhoods
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//approve route
router.put("/:neighborhoodId", (request, response) => {
    const neighborhoodId = request.params.neighborhoodId;

    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            neighborhood.approved = true
            return neighborhood.save()
        })
        .then(() => {
            response.redirect(`/neighborhoods`)
        })
        .catch((error) => {
            console.log(error)
        })
})


//reject route
router.get("/:neighborhoodId", (request, response) => {
    const neighborhoodId = request.params.neighborhoodId;
    NeighborhoodModel.findByIdAndRemove(neighborhoodId)
        .then(() => {
            response.redirect("/")
        })
        .catch((error) => {
            console.log(error)
        })
})


//always export router
module.exports = router;
