'use strict'

const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const CategoriaSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    description: String
}); 

module.exports = mongoose.model("Categoria", CategoriaSchema);