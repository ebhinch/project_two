const express = require("express");
const router = express.Router();

const Schema = require("../db/schema.js");
const UserModel = Schema.UserModel;


router.get("/", (request, response) => {
  //find all users in database 
  UserModel.find({})
    .then((users) => {
      response.render("users/index", {
        users: users
      })
    })
    .catch((error) => {
      console.log(error)
    })
})
  
  
  
  module.exports = router;




