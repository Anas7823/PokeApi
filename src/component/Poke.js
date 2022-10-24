import '../style/Poke.css';
import pokemon from '../assets/Noctali-RFVF.png'

function Poke() {

  return(
    <div className='Poke'>

        <h1>'Nom du pokemon'</h1>
        <h3 className='type'>Type:</h3>
        <div className='conteneurImg'>
          <img src={pokemon} alt='_' className='image' />
        </div>

    </div>)

}

export default Poke;