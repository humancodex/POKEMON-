const axios = require("axios");
const { Pokemon, Tipo } = require("../../db")

module.exports = {
  /* 
  
  -si hay pokemones.length  responde satus 200


  */

  getAllPokemon: async (req, res, next) => {
      try {

      let listPokeDb = await Pokemon.findAll();
      
      let pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151"); //me devuelve un objeto con mas propiedades , la info esta en data
      pokeApi = pokeApi.data.results;
        
      var auxpromises = [];  
        for (let i of pokeApi) {
          auxpromises.push(axios.get(`${i.url}`));
        }

        let listPokeApi = await Promise.all(auxpromises);
        
        var allPokemons=[]
        listPokeApi.forEach(i => {

          allPokemons.push({
            Nombre: i.data.name,
            image: i.data.sprites.front_default,
            Vida: i.data.stats[0].base_stat,
            Fuerza: i.data.stats[1].base_stat,
            Defensa: i.data.stats[2].base_stat,
            Velocidad: i.data.stats[5].base_stat,
            Altura: i.data.height,
            Peso: i.data.weight,
          });
        })

   

        res.json(allPokemons.concat(listPokeDb));
      
      } catch {
        res.send("error");
      }
  },

  getsomePokemon: async (req, res, next) => {},

  getOnePokemon: async (req, res, next) => {},

  createPokemon: async (req, res, next) => {},

  getTypes: async (req, res, next) => {},
};
