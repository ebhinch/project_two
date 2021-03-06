const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//define event schema
const HappeningSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        // type: Date, toUTCString or toISOString().substring
        required: true
    },
    time: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: false
    }
})

//define neighborhood schema
const NeighborhoodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    happenings: [HappeningSchema]
});


//define user schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    home: {
        type: String,
        required: true
    }
});

// const PendingNeighborhoodSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     happenings: [HappeningSchema]
// });



// Create models for each schema
const UserModel = mongoose.model("User", UserSchema);
const NeighborhoodModel = mongoose.model("Neighborhood", NeighborhoodSchema);
const HappeningModel = mongoose.model("Happening", HappeningSchema);
// const PendingNeighborhoodModel = mongoose.model("Pending", PendingNeighborhoodSchema);


// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    NeighborhoodModel: NeighborhoodModel,
    HappeningModel: HappeningModel,
    // PendingNeighborhoodModel: PendingNeighborhoodModel
}
