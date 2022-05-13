import React from "react";
import Style from './header.module.css'
const Header=()=>{
  console.log (Style)
  return(
    <header className={Style.header}>
      <span>header</span>
    </header>
  )
}
export default Header