'use strict'

const Modelousuario = require("../model/Usuario");
const jwt = require("jsonwebtoken");
const Rol = require("../model/Rol")

async function Iniciarsesion(req, res) {
    const userFound = await Modelousuario.findOne({ user: req.body.user });
    if (!userFound) return res.json({ message: "Usuario no encontrado" });

    const matchPassword = await Modelousuario.comparePassword(req.body.pwd, userFound.pwd)
    if (!matchPassword) return res.json({ token: null, "mensaje": "contraseña incorrecta" })

    console.log(userFound); 

    const token = jwt.sign({ id: userFound._id }, "venta_online", {
        expiresIn: 86400
    })
    res.json({ token });
}

async function Registrarse(req, res) {
    const { user, pwd, role } = req.body;
    const newPwd = await Modelousuario.encryptPassword(pwd);
    const newUser = new UserModel({ user, pwd: newPwd });

    const foundRoles = await Rol.find({ name: { $in: role } });

    if (foundRoles.length === 0) return res.json({ error: "Role is not valid" });
    newUser.rol = foundRoles.map(role => role._id);

    await newUser.save()
        .then(doc => res.json(doc))
        .catch(err => console.error(err));
}

module.exports = {
    Iniciarsesion, 
    Registrarse 
}