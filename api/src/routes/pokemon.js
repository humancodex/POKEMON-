const { Router } = require("express");
// Importar todos los routers;


const {
 getAllPokemon, 
 getSomePokemon
} = require("../routes/controllers/pokemoncontrol.js");


//importo los controladores 
const axios = require("axios");

const router = Router();

//en index  ya dice pokemon , es una continuacion 

 router.get("/all", getAllPokemon);

// router.get("/", getSomePokemon);_ funcion con el query y some pokemon (el query no se define en la ruta , destructuring )

// router.get("/:idPokemon", getOnePokemon);//params 

// router.post("/", createPokemon);//body 

module.exports = router;



//analiza como te viene la informacion
