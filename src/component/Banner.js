import '../style/Banner.css';
import Logo from '../assets/pokeball.png'
import Recherche from './recherche';

function Banner() {

  return(
    <div className='Banner'>
      <img className='logo' src={Logo}></img>
      <h1>PokeAPi</h1>
      <Recherche />
    </div>)

}

export default Banner;