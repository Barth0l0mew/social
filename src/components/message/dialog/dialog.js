import React from "react";
import { NavLink } from "react-router-dom";

const Dialog = ({setStyle,id,name})=>{
  
  return (
    
    <NavLink className={setStyle} to={`/message/${id}`}>{name}</NavLink>
       
  )
}
export default Dialog