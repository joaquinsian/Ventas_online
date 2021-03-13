'use strict'

const router = require("express").Router();
const productoController = require("../controller/productoController");

router.post("/agregarProducto", productoController.agregarProducto);
router.get("/mostrarProducto", productoController.verProducto);
router.put("/editarProducto/:idproducto", productoController.editarProducto);
router.delete("/eliminarProducto/:idproducto", productoController.eliminarProducto);
router.get("/productosVendidos", productoController.ProductosVendidos)

module.exports = router;