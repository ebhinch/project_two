const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
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
    },
    image: {
        type: String,
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
    events: [EventSchema]
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    home: {
        type: String,
        required: true
    }
})


// Create models for each schema
const UserModel = mongoose.model("User", UserSchema);
const NeighborhoodModel = mongoose.model("Neighborhood", NeighborhoodSchema);

const EventModel = mongoose.model("Event", EventSchema);



// Export each model so they can be required elsewhere
module.exports = {
    UserModel: UserModel,
    NeighborhoodModel: NeighborhoodModel,
    EventModel: EventModel
    
}
