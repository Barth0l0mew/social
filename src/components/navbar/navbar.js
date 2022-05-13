import React from "react";
import { Link } from "react-router-dom";
import Style from './navbar.module.css'
const Navbar=()=>{
  return(
    <nav className={Style.navbar}>
      <ul className={Style.menu} >
        <li className={Style.menu__item}> 
          <Link to='/' className={Style.menu__link}>Profile</Link>
        </li>
        <li className={Style.menu__item}> 
        <Link to='/message' className={Style.menu__link}>Message</Link>
        </li>
        <li className={Style.menu__item}> 
        <Link to='/news' className={Style.menu__link}>News</Link>
        </li>
        <li className={Style.menu__item}> 
        <Link to='/music' className={Style.menu__link}>Music</Link>
        </li>
        <li className={Style.menu__item}> 
        <Link to='/settings' className={Style.menu__link}>Settings</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar