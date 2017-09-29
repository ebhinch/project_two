const express = require('express')
const router = express.Router({ mergeParams: true })

const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;


//happening index route
router.get("/", (request, response) => {
    //find neighborhood by id from the parameters
    const neighborhoodId = request.params.neighborhoodId;

    //use NeighborhoodModel to get respective neighborhoodId
    NeighborhoodModel.findById(neighborhoodId)
        //THEN render the neighborhood & all the embedded happening information
        .then((neighborhood) => {
            response.render("happenings/index", {
                neighborhood: neighborhood
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//specific happening show route
router.get("/:happeningId", (request, response) => {
    //find the neighborhood by ID
    const neighborhoodId = request.params.neighborhoodId;

    const happeningId = request.params.happeningId;
        
    //save specific happening (by ID) to variable
    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            const happening = neighborhood.happenings.id(happeningId)
            response.render("happenings/show", {
                happening: happening,
                neighborhoodId: neighborhoodId
            })
        })
        .catch((error) => {
            console.log(error)
        })
})







module.exports = router

