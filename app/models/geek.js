/**
 * Created by alexpersian on 3/17/15.
 */

// app/models/geeks.js

// grab the mongoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// defines what makes up a Post
var GeekSchema = new Schema ({
    name: String,
    desc: String,
    quantity: String,
    time: String
});

// allows the model to be passed to other files
module.exports = mongoose.model('Geek', GeekSchema);