/**
 * Created by alexpersian on 3/16/15.
 */

// app/models/nerd.js

// grab the mongoose model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// defines what makes up a Post
var PostSchema = new Schema ({
    type: String,
    name: String,
    desc: String,
    qty: String,
    img: String,
    time: String
});

// allows the model to be passed to other files
module.exports = mongoose.model('Post', PostSchema);