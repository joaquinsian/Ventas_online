'use strict'

const router = require("express").Router();
const facturaController = require("../controller/facturaController");

router.post("agregarFactura", facturaController.agregarFactura);
router.get("mostrarFactura", facturaController.mostrarFactura);
router.put("editarFactura/:idfactura", facturaController.editarFactura);
router.delete("eliminarFactura/:idfactura", facturaController.eliminarFactura);



module.exports = router;