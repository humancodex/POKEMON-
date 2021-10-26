const { Router } = require('express');
const pokemonRoute = require('./pokemon.js')
const tipoRoute = require('./tipo.js')


const router = Router();

router.use('/pokemons',pokemonRoute);
router.use('/types',tipoRoute);


module.exports = router;
