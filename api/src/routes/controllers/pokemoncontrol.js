const axios = require("axios");
const { Pokemon, Type } = require("../../db");

module.exports = {
  getAllPokemon: async (req, res, next) => {
    try {
      const listPokeDb = await Pokemon.findAll();

      let pokeApi = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=40"
      ); //me devuelve un objeto con mas propiedades , la info esta en data
      pokeApi = pokeApi.data.results;

      var auxpromises = [];
      for (let i of pokeApi) {
        auxpromises.push(axios.get(`${i.url}`));
      }

      let listPokeApi = await Promise.all(auxpromises);

      var allPokemons = [];
      listPokeApi.forEach((i) => {
        allPokemons.push({
          name: i.data.name,
          image: i.data.sprites.front_default,
          hp: i.data.stats[0].base_stat,
          attack: i.data.stats[1].base_stat,
          defense: i.data.stats[2].base_stat,
          speed: i.data.stats[5].base_stat,
          height: i.data.height,
          weight: i.data.weight,
        });
      });

      //console.log(JSON.stringify(allPokemons))
      res.json(listPokeDb.concat(allPokemons));
    } catch {
      res.send("error all");
    }
  }, //done

  findPokeName: async function (req, res) {
    let { name } = req.query;
    
    
 try {


 let pokemonDb = await Pokemon.findAll({ where: { name: name } });
  if(pokemonDb.length > 0 ) res.json(pokemonDb) 

  else {


    const pokemonFound = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

   if (pokemonFound.data) {
     pokemon = {
       id: pokemonFound.data.id,
       name: pokemonFound.data.name,
       image: pokemonFound.data.sprites.other["official-artwork"].front_default,
       hp: pokemonFound.data.stats[0].base_stat,
       attack: pokemonFound.data.stats[1].base_stat,
       defense: pokemonFound.data.stats[2].base_stat,
       speed: pokemonFound.data.stats[5].base_stat,
       height: pokemonFound.data.height,
       weight: pokemonFound.data.weight,
       types: pokemonFound.data.types.map((e) => ({ name: e.type.name })),
       createdInBd: false,
     };
     res.json(pokemon);
   }}
 } catch {
   res.send("No existe el pokemón");
 }
  },//done

  findPokeById: async (req, res, next) => {
    const { id } = req.params;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (i) => {
        pokemon = {
          name: i.data.name,
          image: i.data.sprites.front_default,
          hp: i.data.stats[0].base_stat,
          attack: i.data.stats[1].base_stat,
          defense: i.data.stats[2].base_stat,
          speed: i.data.stats[5].base_stat,
          height: i.data.height,
          weight: i.data.weight,
        };

        res.json(pokemon);
      },
      async () => {
        let pokemon = await Pokemon.findByPk(id, { include: Type });
        res.json(pokemon); // success handler y error handler usado para buscar en db
      }
    );
  }, //done

  postPoke: async (req, res, next) => {
   
      const { name, hp, attack, defense, speed, height, weight , type} = req.body;

       Pokemon.create({
        name: name.toLowerCase().trim(),
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        createdInBd: true,
      }).then((r) => {
            Promise.all(
              type.map((d) => {
                Type.findAll({
                  where: {
                    name: d
                  }
                }).then((d) => {
                  r.addType(d)
                });
              })
            )
            .then(res.send(r));
          })
          .catch(next);

      // type.map(
      //    (t) => { 
      //     Type.findAll({where: {name: t}}).then(async (tp)=>{ await pokeCreated.addType(tp)})
      //     })
     
      
      // let id = pokeCreated.id;

      // let posted = await Pokemon.findByPk(id, {
      //   attributes: {
      //     exclude: ["createdAt", "updatedAt"],
      //   },
      //   include: Type
      // });

      // res.status(201).send(posted);
    // } catch {
    //   next(error);
    // }
  },//done

  getTypes: async function (req, res) {
    // const {name} = req.body
    try {
      let types = await Type.findAll();

      if (!types){
      let axiosType = await axios.get(`https://pokeapi.co/api/v2/type`);
      axiosType.data.results.map(async (r) =>
       await  Type.create({
          name: r.name,
        })
      )};

      

      res.json(types);
    } catch (err) {
      return res.status(500).send(err);
    }
  },//done 
};
