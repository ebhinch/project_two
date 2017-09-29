const express = require('express')
const router = express.Router({ mergeParams: true })

const Schema = require("../db/schema.js");
const PendingNeighborhoodModel = Schema.PendingNeighborhoodModel;

//INDEX



//INDEX
//happening index route
router.get("/", (request, response) => {
    PendingNeighborhoodModel.find({})
        .then((neighborhoods) => {
            response.render("admins/index", {
               neighborhoods: neighborhoods
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router;



// use below (and expand) to show neighborhoods not approved
// NeighborhoodModel.find({approved: false})
//     .then((neighborhoods) => {
//         response.render("")
//     })