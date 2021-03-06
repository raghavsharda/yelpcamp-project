const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

// The exports is an object. So, you can attach properties or methods to it
module.exports = mongoose.model('Campground', CampgroundSchema);