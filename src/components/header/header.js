import React from "react";
import Style from './header.module.css'
const Header=()=>{
  console.log (Style)
  return(
    <header className={Style.header}>
      <div className="container">
      <span>header</span>
      </div>
     
    </header>
  )
}
export default Header