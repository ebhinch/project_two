const express = require('express')
const router = express.Router({ mergeParams: true })

const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;

//event index route
router.get("/", (request, response) => {
    //find neighborhood by id from the parameters
    const neighborhoodId = request.params.neighborhoodId;

    //use NeighborhoodModel to get respective neighborhoodId
    NeighborhoodModel.findById(neighborhoodId)
        //THEN render the neighborhood all the embedded event information
        .then((neighborhood) => {
            response.render("events/index", {
                neighborhood: neighborhood
            })
        })
        .catch((error) => {
            console.log(error)
        })
})




module.exports = router

