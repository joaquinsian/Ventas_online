const router = require("express").Router();
const loginController = require("../controller/loginController");

router.post("/Iniciarsesion", loginController.Iniciarsesion);
router.post("/Registrarse", loginController.Registrarse);

module.exports = router; 