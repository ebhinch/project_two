 //happening controller will contain code for sites beginning with "/happenings". this is where all events and event detail will be shown


const express = require('express')
const router = express.Router({ mergeParams: true })

const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;

//INDEX
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


//NEW
//happening new route
router.get("/new", (request, response) => {
    const neighborhoodId = request.params.neighborhoodId;
    response.render("happenings/new", {
        neighborhoodId: neighborhoodId
    })
})


//CREATE
//happening create route
router.post("/", (request, response) => {
    const neighborhoodId = request.params.neighborhoodId;
    const newHappening = request.body;
    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            neighborhood.happenings.push(newHappening)
            return neighborhood.save()
        })
        .then((neighborhood) => {
            response.redirect(`/neighborhoods/${neighborhoodId}/happenings`)
        })
        .catch((error) => {
            console.log(error)
        })
})


//EDIT
//happening edit route
router.get("/:happeningId/edit", (request, response) => {
    const neighborhoodId = request.params.neighborhoodId;
    const happeningId = request.params.happeningId;

    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            const happening = neighborhood.happenings.id(happeningId)
            response.render("happenings/edit", {
                happening: happening,
                neighborhoodId: neighborhoodId
            })
        })
        .catch((error) => {
            console.log(error)
        })
})


//UPDATE
//happening update route
router.put("/:happeningId", (request, response) => {
    console.log('Route hit!')
    const neighborhoodId = request.params.neighborhoodId;
    const happeningId = request.params.happeningId;
    const updatedHappening = request.body;

    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            const happening = neighborhood.happenings.id(happeningId)
            happening.name = updatedHappening.name
            happening.date = updatedHappening.date
            happening.description = updatedHappening.description
            happening.website = updatedHappening.website
            happening.price = updatedHappening.price
            happening.image = updatedHappening.image

            return neighborhood.save()
        })
        .then(() => {
            response.redirect(`/neighborhoods/${neighborhoodId}/happenings/${happeningId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})




//SHOW
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



//DELETE
router.get("/:happeningId/delete", (request, response) => {
    const neighborhoodId = request.params.neighborhoodId;
    const happeningId = request.params.happeningId;

    NeighborhoodModel.findById(neighborhoodId)
        .then((neighborhood) => {
            const happening = neighborhood.happenings.id(happeningId).remove()
            return neighborhood.save()
        })
        .then(() => {
            response.redirect(`/neighborhoods/${neighborhoodId}/happenings`)
        })
        .catch((error) => {
            console.log(error)
        })
})


//always export router

module.exports = router;