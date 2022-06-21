import React from "react";
import { Link, NavLink, useMatch, useParams } from "react-router-dom";
import PostMessage from "./postMessage/postMessage";
import Style from "./message.module.css"
import Dialog from "./dialog/dialog";
import { DialogPageContainer } from "../../newStore/container/dialogPageContainer";
const Message=(props)=>{
  console.log ("dialog=======",props)
 
  const {id}=useParams()
  const dialogData=[
    {id:1,name:'Dima'},
    {id:2,name:'Vanya'},
    {id:3,name:'Sveta'},
    {id:4,name:'Petya'},

]
  const setStyle = ({isActive})=>{
    console.log ( isActive?`${Style.active}`:`${Style.link}`)
   return isActive?`${Style.active}`:`${Style.link}`
  }
  
  return (
    <div className={Style.messages}>
      <div className={Style.dialog}>
        <Dialog></Dialog>
       {dialogData.map((el)=>{
         console.log(el);
       return  <Dialog setStyle={setStyle} 
                key={el.id} 
                id={el.id} 
                name={el.name}></Dialog>})}
        {/* <NavLink className={setStyle} to="/message/1">Dima</NavLink>
        
        <NavLink className={setStyle} to="/message/2">Vanya</NavLink>
        <NavLink className={setStyle} to="/message/3">Sveta</NavLink> */}
      </div>
      <div className={Style.message}>
        <DialogPageContainer></DialogPageContainer>
        {/* <PostMessage message={props.message} dispatch={props.dispatch}></PostMessage> */}
      </div>
    </div>
  )
}
export default Message