import React from 'react';
import './index.css';

export default function PokemonCard( {pokemon} ) {

  const colors = {
  fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#fbf0b7',
	water: '#d0eefc',
	ground: '#f5e0cb',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#d1d1d1',
	fighting: '#E6E0D4', 
  normal: '#F5F5F5'
  };

  const main_types = Object.keys(colors);
  const poke_types = pokemon.types.map(element => element.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);

  const color = colors[type];
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const markNumber =pokemon.id.toString().padStart(3,'0');
  
  return (
    <div className="pokemon" style={{ backgroundColor: color }}>
        <div className="poke-img">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt='Poke'/>
        </div>

      <div className="info">
        <span className="number">#{markNumber}</span> 
        <h3 className="name"> {name}</h3>
      <small className="type">Type: {type} </small>
      </div>
    </div>
  );
}
