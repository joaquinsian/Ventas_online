'use strict'

const Modelofactura = require("../model/factura");



async function agregarFactura(req, res) {
    const { name, amount, price, client, done } = req.body;
    var precio_total = 15; 
    const newFactura = new Modelofactura({
        products: [{
            name,
            amount,
            price,
        }],
        total_price: precio_total,
        client,
        done
    });
    await newFactura.save()
        .then(doc => res.json(doc))
        .catch(err => console.error(err))
}

async function mostrarFactura(req, res) {
    await Modelofactura.find().populate("client", { pwd: 0, role: 0 })
        .then(doc => res.json({ doc }))
        .catch(err => console.error(err));
}


async function editarFactura(req, res) {
    const idfactura = req.params.idfactura;
    const { name, amount, price, client, done } = req.body;
    await Modelofactura.findByIdAndUpdate(idfactura, { name, amount, price, client, done })
        .then(doc => res.json({ doc, updated: true }))
        .catch(err => console.error(err));
}

async function eliminarFactura(req, res) {
    const idfactura = req.params.idfactura;
    const { name, amount, price, client, done } = req.body;
    await Modelofactura.findByIdAndDelete(idfactura)
        .then(doc => res.json({ doc, deleted: true }))
        .catch(err => console.error(err));
}

/*async function facturadeproducto(req, res) {
    res.send("facturadeproducto")
}*/

module.exports = { 
    mostrarFactura,
    agregarFactura, 
    editarFactura, 
    eliminarFactura
    //facturadeproducto
 }