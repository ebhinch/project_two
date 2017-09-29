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
        //THEN render the neighborhood & all the embedded event information
        .then((neighborhood) => {
            response.render("events/index", {
                neighborhood: neighborhood
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//specific event show route
router.get("/:eventId", (request, response) => {
    //find the neighborhood by ID
    const neighborhoodId = request.params.neighborhoodId;

    const eventId = request.params.eventId
        
    //save specific event (by ID) to variable
    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            const event = neighborhood.events.id(eventId)
            response.render("events/show", {
                event: event,
                neighborhoodId: neighborhoodId
            })
        })
        .catch((error) => {
            console.log(error)
        })
})







module.exports = router

