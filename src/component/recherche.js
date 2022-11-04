import '../style/Recherche.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Recherche() {
    const [name, setName] = useState("");
    const [Find, setFind] = useState("");
    const [Img, setImg] = useState("");
    const [Type, setType ] = useState("");

    // // Mode recherche

    useEffect(()=>
    async function getData(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
        console.log(res.data);
        setImg(res.data.sprites.font_default);
        setType(res.data.type[0].type.name);

    }
)
    return(
    <div className='Recherche'>
        <input type="text" />
        <button>Recherchez</button>
    </div>)

}

export default Recherche;