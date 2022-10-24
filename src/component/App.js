import '../style/App.css';
import Banner from './Banner'
import Footer from './Footer'
import Poke from './Poke'
import React, { useState, useEffect } from 'react';


import { Routes, Route,} from "react-router-dom";
import axios from 'axios';


function App() {
  return(
    <div>
      <Banner/>
      <Poke/>
      <Footer/>
    </div>
  )

}

export default App;