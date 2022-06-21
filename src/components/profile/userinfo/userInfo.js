import React from "react";
import Style from './userinfo.module.css'
const UserInfo=(props)=>{
  
  return (
    <div className={Style.userinfo}>
      <img className={Style.foto} src='http://www.ljplus.ru/img4/d/a/darkcyan/2day13.jpg'></img>
      <h1>{props.user.username}</h1>
      <h3>{props.user.name}</h3>
      <h4>Address: {props.user.address.city}</h4>
      <h4>Phone: {props.user.phone}</h4>
    </div>
  )
}
export default UserInfo