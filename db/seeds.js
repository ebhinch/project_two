require('dotenv').config();

// Database setup
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
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


//Create seeded neighborhood, user, and happening data
//neighborhoods
const cabbagetown = new NeighborhoodModel({
    name: "Cabbagetown",
    description: "Cabbagetown is a small neighborhood east just South of Inman Park. Listed on the U.S. National Register of Historic Places, the neighborhood was home to one of the South's first textile processing mills, the Fulton Bag and Cotton Mill. Today it is home to many young adults, art galleries, restaurants and shops.",
    location: "Along Carrol Street",
    approved: true,
    image: "https://jacquelinemhadel.files.wordpress.com/2013/06/canon-pskrog-099.jpg"
})

const candlerPark = new NeighborhoodModel({
    name: "Candler Park",
    description: "A quirky, largely residential neighborhood, Candler Park is an eclectic blend of the modern and historic. It is home to cafes, the quaint Candler Park Market, shops and the eponymous Candler Park, a 55-acre park.",
    location: "East of Little Five Points and west of Lake Claire",
    approved: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumgIrsDU0z00RmVE9OEJ1W0-2UPM8RSZ0Uh-v7Uwe0ddKVucbkQ"
})

const decatur = new NeighborhoodModel({
    name: "Decatur",
    description:"Decatur is a city east of Atlanta where friendly neighbors, tree-lined streets, great schools, parks and playing fields, libraries, colleges, and businesses all make it a wonderful place to spend some time.",
    location: "East of Druid Hills",
    approved: true,
    image: "http://atlhomesearch.com/images/City-of-Decatur-realtors.jpg"
})


const grantPark = new NeighborhoodModel({
    name: "Grant Park",
    description: "Grank Park is one of those neighborhoods that just feels like home. Located southeast of Downtown Atlanta, it's charcterized by Victorian-style architecture, little villages of local shops and restaurants, and the oldest park in the city.",
    location: "East of Turner Field and west of Glenwood",
    approved: true,
    image: "http://d1marr3m5x4iac.cloudfront.net/images/edpborder500/I0-001/004/400/494-8.jpeg_/grant-park-94.jpeg"

})

const inmanPark = new NeighborhoodModel({
    name: "Inman Park",
    description: "Atlanta's first planned suburb, Inman Park is known now for its hip food scene, proximity to the Eastside BeltLine Trail, various parks, and the beautiful Victorian homes that first called it home.",
    location: "Between Beltline and Edgewood",
    approved: true,
    image: "http://www.inmanparkrestaurantweek.com/wp-content/uploads/2014/03/hero-for-home1.jpg"
})

const ponceyHighland = new NeighborhoodModel({
    name: "Poncey Highland",
    description: "Named after the intersectin of Ponce de Leon Avenue and North Highland Avenue, Poncey-Highland is a small neighborhood situated between Virginia-Highland and Inman Park. It's home to many city landmarks such as the Clermont Lounge, the Carter Presidential Library and Center, Manuel's Tavern, and more.",
    location: "North Highland between Ponce and Freedom Parkway",
    approved: true,
    image: "https://static1.squarespace.com/static/578585ba03596e712b579102/t/57d203abebbd1a73521b2849/1473381295893/"
})

const virginiaHighland = new NeighborhoodModel({
    name: "Virginia-Highland",
    description: "Developed in the early 1900’s, Virginia-Highland, consists of four distinct commercial “villages” connected by short, walkable blocks lined with charming bungalow homes. The neighborhood’s name derives from the intersection of Virginia and Highland Avenues and has the feel of a small town within the heart of the city.",
    location: "North Highland from Morningsie to Ponce de Leon Avenue",
    approved: true,
    image: "http://realty4atlanta.com/wp-content/uploads/2013/06/sign.jpg"
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

//happenings
const grantParkFarmersMarket = new HappeningModel({
    name: "Grant Park Farmer's Market",
    date: "Sundays through December 17",
    time: "9 a.m. to 1 p.m.",
    description: "The Grant Park Farmers Market has been voted Best Farmers Market in Creative Loafing and Atlanta Magazine. Weekly free celebrity chef demonstrations at market feature the top chefs in the south including Hugh Acheson, Kevin Gillespie, Steven Satterfield, Virginia Willis and many more. Shoppers, foodies, bloggers, and critics all agree that the Grant Park Farmers Market is the place to be on Sunday mornings. The Grant Park Farmers Market is operated in partnership with the Grant Park Conservancy.",
    website: "https://cfmatl.org/grantpark/"
})
const chompAndStomp = new HappeningModel({
    name: "Chomp & Stomp Chili Cook-off and Bluegrass Festival",
    date: "November 4, 2017",
    time: "11 a.m.",
    description: "An annual festival benefitting Cabbagetown parks, green spaces, and community center! In addition to the beloved chili cookoff, there's music, an artist market, and a 5K run. It's the tastiest, foot-stompin’est, MOST FUN fall festival in Atlanta!",
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

const sabChineseNewYear = new HappeningModel({
    name: "Sweet Auburn Barbecue Chinese New Year Pop-Up",
    date: "February 15, 2018",
    time: "9 p.m.",
    description: "adsfasd",
    website: "www.sweetauburnbbq.com",
    price: 15
})

const murphysTreeLighting = new HappeningModel({
    name: "Murphy's 11th Annual Christmas Tree Lighting",
    date: "December 7, 2017",
    time: "6:30 p.m.",
    description:"asdfasd",
    website: "www.murphysatl.com",
    price: 5
})


// const pendingNeighborhoods = [];
const cabbagetownHappenings = [chompAndStomp, yardSale];
const candlerParkHappenings = [candlerParkFarmersMarket];
const decaturHappenings = [decaturBookFestival];
const grantParkHappenings = [grantParkFarmersMarket];
const inmanParkHappenings = [inmanParkRestoWeek, freedomFarmersMarket];
const ponceyHighlandHappenings = [sabChineseNewYear];
const virginiaHighlandHappenings = [murphysTreeLighting];


//save arrays
cabbagetown.happenings = cabbagetownHappenings;
candlerPark.happenings = candlerParkHappenings;
decatur.happenings = decaturHappenings;
grantPark.happenings = grantParkHappenings;
inmanPark.happenings = inmanParkHappenings;
ponceyHighland.happenings = ponceyHighlandHappenings;
virginiaHighland.happenings = virginiaHighlandHappenings;

const users = [tom, erica, victoria, brandon, heather, chloe, blake];

const neighborhoods = [ponceyHighland, virginiaHighland, cabbagetown, candlerPark, decatur, grantPark, inmanPark];
neighborhoods.sort();
users.sort();
//save all neighborhoods

UserModel.remove({})
    .then(() => {
        return UserModel.insertMany(users)
    })
    .then(() => {
        console.log('Users saved!')
        return NeighborhoodModel.remove({})
    })
    .then(() => {
        return NeighborhoodModel.insertMany(neighborhoods)
    })
    .then(() => {
        console.log('Neighborhoods saved!')
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        db.close()
    })
