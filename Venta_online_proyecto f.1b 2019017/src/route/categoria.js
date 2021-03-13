'use strict'

const router = require("express").Router();
const categoriaController = require("../controller/categoriaController")

router.get("/mostrarCategoria", categoriaController.mostrarCategoria);
router.post("/agregarcategoria", categoriaController.agregarCategoria);
router.put("/editarCategoria/:idcategoria", categoriaController.editarCategoria);
router.delete("/eliminarCategoria/:idcategoria", categoriaController.eliminarCategoria);

module.exports = router;