import React,{ useState,useEffect } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import axios from 'axios';

function App() {

  const [pokemon,setPokemon] = useState([]);
  const [pokeNumber,setPokeNumber] = useState(150);

  useEffect(()=> {

    async function pokeRow() {
      for(let i=1; i<= pokeNumber; i++){
        await loadPokemons(i);
      }
    }

    async function loadPokemons(id){
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      await axios.get(url).then(res=> {
        setPokemon(pokemons=> {
          return [...pokemons,res.data]
        })
      })
    }
    loadPokemons()
    pokeRow();
  }, [pokeNumber] );
  
  

  return (
    <>
    <h1>PokeDex</h1>
      <div className="poke-container">

      {pokemon.map(pokemon=> (
      <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>
      ))}
    </div>
    </>
      
  ); 
}

export default App;
