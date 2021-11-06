import axios from 'axios';
export const FETCH_POKEMONS = 'FETCH_POKEMONS'

export default function getPokemons() {
   return  async function (dispatch){
        var req = await axios.get ('http://localhost:3001/pokemons/',{})
       
        dispatch({ //despacha la accion , como es asincornico en vez de retornar el objeto hago dispatch 
            type:FETCH_POKEMONS,
            payload:req.data  
        });
        
   
}
};




