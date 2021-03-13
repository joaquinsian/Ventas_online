'use strict'

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Main = require("./libs/Main")

//llama a la conexion a la base de datos
require("./config/conexion");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//llama a main para iniciar 
Main.crearRoles();
Main.crearCuentaM();

app.use(require("./route/login"));
app.use(require("./route/categoria"));
app.use(require("./route/producto"));
app.use(require("./route/factura"));
app.use(require("./route/usuario"));

// verifica y manda mensaje de el servicion esta corriendo correctamente
app.listen(3000, () => { console.log("el servidor esta corriendo en el puerto 3000") });