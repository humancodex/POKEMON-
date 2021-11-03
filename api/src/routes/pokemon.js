//router es solo para derivar rutas

const express = require("express");
const server = express();

const {
  getAllPokemon,
  findPokeName,
  postPoke,
  findPokeById,
} = require("../routes/controllers/pokemoncontrol.js");

//esto es: /pokemons...




server.get("/all", getAllPokemon);

server.get("/", findPokeName);


// //ruta para pedir un pokemon específico por ID (params), 
server.get('/:id', findPokeById)//params


// //ruta para postear pokemon en db, 
server.post('/', postPoke)//body 



module.exports = server;

//analiza como te viene la informacion
