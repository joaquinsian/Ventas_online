'use strict'

const Modeloproducto = require("../model/Producto")


//agregar productos
async function agregarProducto(req, res) {
    const { name, stock, price, category } = req.body;
    const newProducto = new Modeloproducto({ name, stock, price, category });
    await newProducto.save()
        .then(doc => res.json(doc))
        .catch(err => console.error(err));
}

//ver producto el producto que tenemos
async function verProducto(req, res) {
    await Modeloproducto.find().populate("categoria")
        .then(doc => res.json(doc))
        .catch(err => console.error(err));
}

async function editarProducto(req, res) {
    const idproducto = req.params.idproducto;
    const { name, stock, price, category } = req.body;
    await Modeloproducto.findByIdAndUpdate(idproducto, { name, stock, price, category })
        .then(doc => res.json({ doc, updated: true }))
        .catch(err => console.error(err));
}

async function eliminarProducto(req, res) {
    const idproducto = req.params.idproducto;
    await Modeloproducto.findByIdAndDelete(idproducto)
        .then(doc => res.json({ doc, deleted: true }))
        .catch(err => console.error(err));
}


async function ProductosVendidos(req, res) {
    await Modeloproducto.find({ stock: 0 })
        .then(doc => res.json(doc))
        .catch(err => console.error(err));
}

module.exports = { 
     agregarProducto,
     verProducto, 
     editarProducto, 
     eliminarProducto, 
     ProductosVendidos
    }