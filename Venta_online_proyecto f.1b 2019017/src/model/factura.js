'use strict'

const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const FacturaSchema = new Schema({
    products: [{
        "name": "String",
        "amount": "Number",
        "price": "Number"
    }],
    total_price: Number, // Será calculado automáticamente
    client: [{
        ref: "User",
        type: Schema.Types.ObjectId 
    }],
    done: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model("Factura", FacturaSchema);