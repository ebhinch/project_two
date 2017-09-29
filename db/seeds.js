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

const brandon = new UserModel({
    name: "Brandon",
    email: "brandon@gmail.com",
    home: "Cabbagetown"
})

//happening
const chompAndStomp = new HappeningModel({
    name: "Chomp and Stomp",
    date: new Date("2017-11-05T14:00:00"),
    description: "Annual chili festival",
    website: "www.chompandstomp.com",
    price: 25,
    image: ""
})

const yardSale = new HappeningModel({
    name: "Cabbagetown Yard Sale",
    date: new Date("2017-10-13"),
    description: "End of year yard sale",
    website: "www.yardsale.com",
    price: 1,
    image: ""
})

const inmanParkRestoWeek = new HappeningModel({
    name: "Inman Park Restaurant Week",
    date: new Date("October 1, 2017"),
    description: "Annual restaurant week in Inman Park's favorite restaurants.",
    website: "www.inmanparkrestoweek.com",
    price: 50,
    image: ""
})

const freedomFarmersMarket = new HappeningModel ({
    name: "Freedom Farmers Market",
    date: (2017, 10, 6),
    description: "Weekly farmers market at Carter Center",
    website: "www.freedomfarmersmarket.com",
    price: 3,
    image: ""
})

const candlerParkFarmersMarket = new HappeningModel({
    name: "Candler Park Farmer's Market",
    date: (2017, 10, 10),
    description: "weekly farmers market",
    website: "www.candlerparkfarmersmarket.com",
    price: 10,
    image: ""
})


tom.save()
erica.save()
victoria.save()



const neighborhoods = [cabbagetown, inmanPark, candlerPark];
const cabbagetownHappenings = [chompAndStomp, yardSale];
const inmanParkHappenings = [inmanParkRestoWeek, freedomFarmersMarket];
const candlerParkHappenings = [candlerParkFarmersMarket];

cabbagetown.happenings = cabbagetownHappenings;
cabbagetown.save();

inmanPark.happenings = inmanParkHappenings;
inmanPark.save();

candlerPark.happenings = candlerParkHappenings;
candlerPark.save();


// Disconnect from database
db.close();