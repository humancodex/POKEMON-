const express = require('express')
const server = express();
//const { Pokemon, Type } = require("../../db")



const {
getTypes,
} = require("../routes/controllers/pokemoncontrol.js");



//esto es types/
server.get('/', getTypes)







module.exports = server;
