import React from 'react';
import './index.css';

export default function PokemonCard( {pokemon} ) {
 
  return (
    <>
    <strong>{pokemon.name}</strong>
          <h1>{pokemon.id}</h1>
      <div className="poke-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt='Poke'/>
      </div>
    </>
  );
}
