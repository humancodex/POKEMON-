import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import getPokemons  from "../actions";
import Pokemon from "./Pokemon"

export default function Home() {
  const dispatch = useDispatch(); //para llamar una funcion
  const allPokemons = useSelector((state) => state.pokemons); //me trae lo que quiero del state en reducer (reemplaza map state )
   console.log(allPokemons)


  useEffect(() => {
    dispatch(getPokemons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);// lo monta siempre y cuendo el dispatch funcione


function handleClick(e) {
e.preventDefault();//para que no se recrague la pag 
dispatch(getPokemons());

}
  return (
    <div>
      <Link to="/pokemons"> Crear Pokemon</Link>
      <h1>BIENVENIDO A POKEMÓN</h1>
      <button
        onClick={(E) => {
          handleClick(E);
        }}
      >
     Recargar Personajes
      </button>
      <div>
        <select>
          <option value="asc">ASCENDENTE</option>
          <option value="desc">DESCENDENTE</option>
        </select>
        <select>
        
          <option value="fighting">fighting</option>
          <option value="normal">normal</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="fire">fire</option>
          <option value= "electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="ice">ice</option>
          <option vale="fairy">fairy</option>
          <option value="shadow">shadow</option>
          <option value="normal">normal</option>
          <option value="unknown">unknown</option>
        </select>

        <select>
          <option value= "ALL">ALL</option>
          <option value= "CREATED">CREATED</option>
          <option value="DEFAULT API">DEFAULT API</option>
        </select>

  {allPokemons?.map((p)=>{//te trae la tarjeta pokemon
         return ( 
           <Fragment>
           <Link to={"/home"+ p.id}>
           <Pokemon name={p.name} image={p.image} type={p.type} key={p.id}/>
           </Link>
           </Fragment> )
        })};
      </div>
    </div>
  );
}
//el value me permite preguntar y que la accion entienda cuando pregunto 



// "fighting"
// "normal"
// "ground"
// "rock"
// "flying" 
// "poison"
// "bug"
// "ghost"
// "steel"
// "water"
// "grass"
// "fire"
// "electric"
// "psychic"
// "dragon"
// "dark"
// "ice"
// "unknown"
