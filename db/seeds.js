require('dotenv').config();

// Database setup
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;


// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log(err);
});
// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("Connected to MongoDB!");
});

// Pull in Models from the `schema.js`
const Schema = require("./schema.js");

const NeighborhoodModel = Schema.NeighborhoodModel;
const UserModel = Schema.UserModel;
const EventModel = Schema.EventModel;

// Delete all Neighborhoods from the database
NeighborhoodModel.remove({}, function (err) {
    console.log(err);
});

//Create seeded neighborhood, user, and event data
//neighborhoods
const cabbagetown = new NeighborhoodModel({
    name: "Cabbagetown",
    location: "Along Carrol Street"
})

const inmanPark = new NeighborhoodModel({
    name: "Inman Park",
    location: "Between Beltline and Edgewood"
})

const candlerPark = new NeighborhoodModel({
    name: "Candler Park",
    location: "East of Little Five Points"
})

//users
const erica = new UserModel({
    name: "Erica",
    email: "erica.hinchman@gmail.com",
    home: "Virginia-Highland"
})

const victoria = new UserModel({
    name: "Victoria",
    email: "victoria@gmail.com",
    home: "Peoplestown"
})

const tom = new UserModel({
    name: "Tom",
    email: "tom@gmail.com",
    home: "Edgewood"
})

//events
const chompAndStomp = new EventModel({
    name: "Chomp and Stomp",
    date: new Date("2017-11-05T14:00:00"),
    description: "Annual chili festival",
    website: "www.chompandstomp.com",
    price: 25,
    image: ""
})

const yardSale = new EventModel({
    name: "Cabbagetown Yard Sale",
    date: (2017, 12, 01),
    description: "End of year yard sale",
    website: "www.yardsale.com",
    price: 1,
    image: ""
})

const inmanParkRestoWeek = new EventModel({
    name: "Inman Park Restaurant Week",
    date: (2017, 09, 30),
    description: "Annual restaurant week in Inman Park's favorite restaurants.",
    website: "www.inmanparkrestoweek.com",
    price: 50,
    image: ""
})

const freedomFarmersMarket = new EventModel ({
    name: "Freedom Farmers Market",
    date: (2017, 10, 6),
    description: "Weekly farmers market at Carter Center",
    website: "www.freedomfarmersmarket.com",
    price: 3,
    image: ""
})

const candlerParkFarmersMarket = new EventModel({
    name: "Candler Park Farmer's Market",
    date: (2017, 10, 10),
    description: "weekly farmers market",
    website: "www.candlerparkfarmersmarket.com",
    price: 10,
    image: ""
})

const users = [erica, victoria, tom];


const neighborhoods = [cabbagetown, inmanPark, candlerPark];
const cabbagetownEvents = [chompAndStomp, yardSale];
const inmanParkEvents = [inmanParkRestoWeek, freedomFarmersMarket];
const candlerParkEvents = [candlerParkFarmersMarket];

cabbagetown.events = cabbagetownEvents;
cabbagetown.save();

inmanPark.events = inmanParkEvents;
inmanPark.save();

candlerPark.events = candlerParkEvents;
candlerPark.save();


// Disconnect from database
db.close();