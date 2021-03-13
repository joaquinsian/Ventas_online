const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const RolSchema = new Schema({
    name: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model("Rol", RolSchema)