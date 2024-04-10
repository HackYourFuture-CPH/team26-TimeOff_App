import { Link } from "react-router-dom";
import './Navbar.css'

import logo from '../img/navbar/logo.svg'
import search_icon_light from '../img/navbar/search-w.png'
import search_icon_dark from '../img/navbar/search-b.png'
import toggle_light from '../img/navbar/night.png'
import toggle_dark from '../img/navbar/day.png'

export default function Navbar ({theme, setTheme}) {

  const toggle_mode = ()=>{
    theme === 'light' ?  setTheme('dark') : setTheme('light');
  } 

    return (
      <div className='navbar'>
        <Link to="/">
          <img src={theme === 'light' ? logo : logo} alt="" className='logo' />
        </Link>
        <ul>
          <li><Link to="Home"> Home</Link></li>
          <li><Link to="Pricing"> Pricing</Link></li>
          <li><Link to="About-Us"> About Us</Link></li>
        </ul>

        <div className='search-box'>
          <input type="text" placeholder='Search'/>
          <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" />
        </div>

        <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>
      </div>
  )
}
