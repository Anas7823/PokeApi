import '../style/App.css';
import Banner from './Banner'
import Footer from './Footer'
import Poke from './Poke'
import React, { useState, useEffect } from 'react';


import {
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';

function App() {
    const [pokemons, setPokemons] = useState([]) 
    
    useEffect(() =>{

      const getPokemon = async() => {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20.')

        console.log(res.data.results);

        res.data.results.forEach(async (pokemon) =>{
          const poke = await axios.get(`https://pokeapi.co/api/v2/pokemo,/${pokemon.name}`)
          console.log(poke);
        })
        }

      getPokemon()

    },  [])
  return(
    <div>
      <Banner/>

      <Poke/>
      
      <Footer/>
    </div>
  )

}

export default App;