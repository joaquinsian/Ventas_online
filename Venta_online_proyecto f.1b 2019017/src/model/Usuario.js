const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const UsuarioSchema = new Schema({
    user: {
        type: String,
        unique: true
    },
    pwd: String,
    role: [{
        ref: "Rol",
        type: Schema.Types.ObjectId
    }]
});

UsuarioSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UsuarioSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model("Usuario", UsuarioSchema)