import '../style/App.css';
import Banner from './Banner'
import Footer from './Footer'
import Poke from './Poke'

import { Routes, Route,} from "react-router-dom";



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