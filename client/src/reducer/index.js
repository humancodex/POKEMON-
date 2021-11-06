

const initialState ={
  pokemons: [],
  filteredPokemons:[],
}
//lo que uso en un componente es local
//lo que uso en varios componentes es global 
export default function rootReducer (state = initialState, action){
switch (action.type) {
  case "FETCH_POKEMONS":
      return{ 
          ...state,
        pokemons: action.payload//axios
      }
  default:
      return state 
   
}
}