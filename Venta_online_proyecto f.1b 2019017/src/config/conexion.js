const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ventas_online", {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log("La base de datos esta conectada"))
    .catch(err => console.error(err))