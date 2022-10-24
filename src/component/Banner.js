import '../style/Banner.css';
import Logo from '../assets/pokeball.png'

function Banner() {

  return(
    <div className='Banner'>
      <img className='logo' src={Logo}></img>
      <h1>PokeAPi</h1>
    </div>)

}

export default Banner;