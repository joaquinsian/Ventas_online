'use strict'

const Modelocategoria = require("../model/Categoria");
const Modeloproducto = require("../model/Producto");


//agregar categorias
async function agregarCategoria(req, res) {
    const { name, description } = req.body;
    const newCategoria = new Modeloproducto({ name, description });
    await newCategoria.save()
        .then(doc => res.json(doc))
        .catch(err => console.error(err));
}

async function mostrarCategoria(req, res) {
    await Modelocategoria.find()
        .then(doc => res.json(doc)) 
        .catch(err => console.error(err));
}

async function editarCategoria(req, res) {
    const idcategoria = req.params.idcategoria;
    const { name, description } = req.body;
    await Modelocategoria.findByIdAndUpdate(idcategoria, { name, description })
        .then(doc => res.json({ doc, updated: true }))
        .catch(err => console.error(err));
}

async function eliminarCategoria(req, res) {
    const idcategoria = req.params.idcategoria;
    const categoryIsUsed = await Modelocategoria.find({ category: { $in: [idcategory] } });
    const idDefault = await Modelocategoria.find({ name: { $in: ["default"] } });

    if (categoryIsUsed.length === 0) {
        await Modelocategoria.findByIdAndDelete(idcategoria)
            .then(doc => res.json({ doc, deleted: true }))
            .catch(err => console.error(err));
    } else {
        await Modeloproducto.findByIdAndUpdate(categoryIsUsed[0]._id, { category: [idDefault[0]._id] });
        await Modelocategoria.findByIdAndDelete(idcategoria)
            .then(doc => res.json({ doc, deleted: true }))
            .catch(err => console.error(err));
    }
}

module.exports = {  
    agregarCategoria, 
    mostrarCategoria,
    editarCategoria, 
    eliminarCategoria
}