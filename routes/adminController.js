const express = require('express')
const router = express.Router({ mergeParams: true })


const Schema = require("../db/schema.js");
const NeighborhoodModel = Schema.NeighborhoodModel;
// const PendingNeighborhoodModel = Schema.PendingNeighborhoodModel;

//INDEX



//INDEX
//happening index route
router.get("/", (request, response) => {
    NeighborhoodModel.find({approved: false})
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


