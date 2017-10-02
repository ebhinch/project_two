const express = require("express");
const router = express.Router();

const Schema = require("../db/schema.js");
const UserModel = Schema.UserModel;
const NeighborhoodModel = Schema.NeighborhoodModel;



//INDEX
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

//NEW
router.get("/new", (request, response) => {
  response.render("users/new")
})

//CREATE
router.post("/", (request, response) => {
  const newUser = request.body;
  UserModel.create(newUser)
    .then(() => {
      response.redirect("/users")
    })
    .catch((error) => {
      console.log(error)
    })
})

  
//SHOW
router.get("/:userId", (request, response) => {
  //find user by id
  const userId = request.params.userId;



  UserModel.findById(userId)
    .then((user) => {
      console.log(user)
      response.render("users/show", {
        user: user
      })
    })
    .catch((error) => {
      console.log(error)
  })

})

//DELETE
router.get("/:userId/delete", (request, response) => {
  const userId = request.params.userId
  UserModel.findByIdAndRemove(userId)
    .then(() => {
      response.redirect("/users")
    })
    .catch((error) => {
      console.log(error)
    })
})




module.exports = router;

