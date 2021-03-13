const usuarioController = require("../controller/usuarioController");
const router = require("express").Router();

router.get("/mostrarUsuario", usuarioController.Mostrarusuario);
router.put("/editarUsuario/:idusuario", usuarioController.Editarusuario);
router.delete("/EliminarUsuario/:idusuario", usuarioController.Editarusuario);

module.exports = router; 