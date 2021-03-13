'use strict'

const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const productoSchema = new Schema({
    name: String,
    stock: Number,
    price: Number,
    category: [{
        ref: "Category",
        type: Schema.Types.ObjectId
    }]
});

module.exports = mongoose.model("Producto", productoSchema);