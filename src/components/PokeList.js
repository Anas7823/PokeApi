import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
import '../styles/PokeList.css'
import banner from '../assets/banner.png'

function PokeList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const res = axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      res.then(res => {
        setPokemons(res.data.results);
      })
      res.catch(error => {
        console.log(error);
      });
  }, []);

  const getPokemonImage = (pokemonUrl) => {
    const pokemonIndex = pokemonUrl.split('/')[6];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;
    return imageUrl;
  };

  return (
    <div className='PokeList'>
        <img src={banner}/>
      <div className='contenaire'>
        <CardGroup>
          {pokemons.map(pokemon => (
              <div className='carte' key={pokemon.name}>
                <h1>{pokemon.name}</h1>
                <img src={getPokemonImage(pokemon.url)} alt={pokemon.name} /> 
            </div>
          ))}
        </CardGroup>
      </div>
    </div>
  );
}

export default PokeList;
