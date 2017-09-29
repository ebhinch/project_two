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
const HappeningModel = Schema.HappeningModel;

// Delete all Neighborhoods from the database
NeighborhoodModel.remove({}, function (err) {
    console.log(err);
});

// Delete all Users from the database
UserModel.remove({}, function (err) {
    console.log(err);
});

//Create seeded neighborhood, user, and happening data
//neighborhoods
const cabbagetown = new NeighborhoodModel({
    name: "Cabbagetown",
    location: "Along Carrol Street"
})

const ponceyHighland = new NeighborhoodModel({
    name: "Poncey Highland",
    location: "North Highland between Ponce and Freedom Parkway"
})

const inmanPark = new NeighborhoodModel({
    name: "Inman Park",
    location: "Between Beltline and Edgewood"
})

const candlerPark = new NeighborhoodModel({
    name: "Candler Park",
    location: "East of Little Five Points"
})

const decatur = new NeighborhoodModel({
    name: "Decatur",
    location: "East of Druid Hills"
})

const virginiaHighland = new NeighborhoodModel({
    name: "Virginia-Highland",
    location: "North Highland from Morningsie to Ponce de Leon Avenue"
})

//users
const erica = new UserModel({
    name: "Erica",
    email: "erica.hinchman@gmail.com",
    home: "Virginia-Highland"
})

const heather = new UserModel({
    name: "Heather",
    email: "heather@gmail.com",
    home: "Inman Park"
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

const brandon = new UserModel({
    name: "Brandon",
    email: "brandon@gmail.com",
    home: "Cabbagetown"
})

const blake = new UserModel({
    name: "Blake",
    email: "blake@gmail.com",
    home: "Candler Park"
})

const chloe = new UserModel({
    name: "Chloe",
    email: "chloe@gmail.com",
    home: "Poncey Highland"
})

//happening
const chompAndStomp = new HappeningModel({
    name: "Chomp and Stomp",
    date: "November 4, 2017",
    time: "11 a.m.",
    description: "Annual chili festival",
    website: "http://www.chompandstomp.com/",
    price: 25
})

const yardSale = new HappeningModel({
    name: "Cabbagetown Yard Sale",
    date: "October 13, 2017",
    time: "9:30 a.m.",
    description: "End of year yard sale",
    website: "www.yardsale.com",
    price: 1
})

const inmanParkRestoWeek = new HappeningModel({
    name: "Inman Park Restaurant Week",
    date: "October 1, 2017",
    description: "Annual restaurant week in Inman Park's favorite restaurants.",
    website: "www.inmanparkrestoweek.com",
    price: 50
})

const freedomFarmersMarket = new HappeningModel ({
    name: "Freedom Farmers Market",
    date: "October 7, 2017",
    time: "9 a.m.",
    description: "Weekly farmers market at Carter Center",
    website: "www.freedomfarmersmarket.com",
    price: 3
})

const candlerParkFarmersMarket = new HappeningModel({
    name: "Candler Park Farmer's Market",
    date: "October 8, 2017",
    time: "8 a.m.",
    description: "weekly farmers market",
    website: "www.candlerparkfarmersmarket.com",
    price: 10
})

const decaturBookFestival = new HappeningModel({
    name: "Decatur Book Festival",
    date: "August 31, 2018",
    time: "Various times",
    description: "Celebration of books and the literary culture",
    website: "https://www.decaturbookfestival.com/",
    price: 15
})


//save all users
tom.save()
erica.save()
victoria.save()
brandon.save()
heather.save()
chloe.save()
blake.save()


//assign neighborhoods and happenings to arrays by location
const neighborhoods = [cabbagetown, inmanPark, candlerPark, decatur, ponceyHighland, virginiaHighland];
const pendingNeighborhoods = [];
const cabbagetownHappenings = [chompAndStomp, yardSale];
const inmanParkHappenings = [inmanParkRestoWeek, freedomFarmersMarket];
const candlerParkHappenings = [candlerParkFarmersMarket];
const decaturHappenings = [decaturBookFestival];

//save arrays
cabbagetown.happenings = cabbagetownHappenings;
cabbagetown.save();

inmanPark.happenings = inmanParkHappenings;
inmanPark.save();

candlerPark.happenings = candlerParkHappenings;
candlerPark.save();

decatur.happenings = decaturHappenings;
decatur.save();

pendingNeighborhoods.save() 


// Disconnect from database
db.close();