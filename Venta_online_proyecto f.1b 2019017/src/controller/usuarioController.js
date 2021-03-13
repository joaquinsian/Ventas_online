const Modelousuario = require("../model/Usuario");

async function Mostrarusuario(req, res) {
    await Modelousuario.find().populate("role")  
        .then(doc => res.json(doc))
        .catch(err => console.error(err));
}

async function Editarusuario(req, res) {
    const idusuario = req.params.idusuario;
    const { user, pwd, role } = req.body;
    const isClient = await Modelousuario.find({ _id: { $in: [idusuario] }, role: "client" });

    if (isClient.length === 0) return res.json({ error: "El usuario no es cliente" });

    await Modelousuario.findByIdAndUpdate(idusuario, { user, pwd, role })
        .then(doc => res.json({ doc, updated: true }))
        .catch(err => console.error(err));
}

async function Eliminarusuario(req, res) {
    const iduser = req.params.iduser;
    const isClient = await Modelousuario.find({ _id: { $in: [iduser] }, role: "client" });

    if (isClient.length === 0) return res.json({ error: "User is not a client" });

    await Modelousuario.findByIdAndDelete(iduser)
        .then(doc => res.json({ doc, deletd: true }))
        .catch(err => console.error(err));
}

module.exports = { 
    Mostrarusuario,
    Editarusuario, 
    Eliminarusuario
}