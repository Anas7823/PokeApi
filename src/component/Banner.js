import '../style/Banner.css';
import Logo from '../assets/Noctali-RFVF.png'

function Banner() {

  return(
    <div className='Banner'>
      <img className='logo' src={Logo}></img>
      <h1>PokeAPi</h1>
    </div>)

}

export default Banner;