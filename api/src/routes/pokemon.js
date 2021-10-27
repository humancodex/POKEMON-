//router es solo para derivar rutas 

const express = require('express')
const server = express();
const {
 getAllPokemon, 
 getSomePokemon
} = require("../routes/controllers/pokemoncontrol.js");



//en index  ya dice pokemon , es una continuacion 

 server.get("/all", getAllPokemon);

// router.get("/", getSomePokemon);_ funcion con el query y some pokemon (el query no se define en la ruta , destructuring )

// router.get("/:idPokemon", getOnePokemon);//params 

// router.post("/", createPokemon);//body 

module.exports = server;



//analiza como te viene la informacion
