'use strict';

const mongoose = require("mongoose");

const fruitsSchema = new mongoose.Schema({

    name: { type: String },
    image: { type: String },
    price: { type: Number },
    email: { type: String }

})

const fruitsModel = mongoose.model("fruits", fruitsSchema);

module.exports = fruitsModel;