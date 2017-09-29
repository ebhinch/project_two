const mongoose = require('mongoose');

const Schema = mongoose.Schema;


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

const NeighborhoodSchema = new Schema({
    name: {
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
    happenings: [HappeningSchema]
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
})


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
