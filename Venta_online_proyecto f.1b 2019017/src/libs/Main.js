const Modelorol = require("../model/Rol");
const Modelousuario = require("../model/Usuario");

async function crearRoles() {
    const count = await Modelorol.estimatedDocumentCount();
    try {
        if (count > 0) return;

        const values = await Promise.all([
            new Modelorol({ name: 'admin' }).save(),
            new Modelorol({ name: 'client' }).save()
        ])

        console.log(values);
    } catch (error) {
        console.error(error);
    }
}

async function crearCuentaM() {
    const count = await Modelousuario.estimatedDocumentCount();
    const foundRoles = await Modelorol.find({ name: { $in: "admin" } });
    const rolAdmin = await foundRoles.map(rol => rol._id)
    try {
        if (count > 0) return;

        const values = await Promise.all([
            new Modelousuario({ user: "ADMIN", pwd: "123456", rol: rolAdmin }).save()
        ]);

        console.log(values);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { 
    crearRoles, 
    crearCuentaM 
};