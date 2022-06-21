import React from "react";
import { useParams } from "react-router-dom";
import { onAddMessage, onChangeMessage } from "../../../store/action/messagePage/actionCreate";
import Style from './postMassage.module.css'
const PostMessage=(props)=>{
  console.log ('------------------message-----------------',props)
  const {id}=useParams();
  const handler =(event)=>{
    event.preventDefault();
   // props.dispatch(onAddMessage())
   props.addMessage();
   
  }
  const setdata = (event)=>{
    props.postMessage(event.target.value)
 // props.dispatch(onChangeMessage(event.target.value))
  }
  return(
    <div>
      {id}
      {(id)?props.message.map((el,item)=><div key={item}>{el.title}</div>):null}
      { (id)? (
      <form action="#" className={Style.form} onSubmit={handler}>
        <textarea placeholder="MyMessage" className={Style.textarea} onChange={setdata} 
        value ={props.newMessage} ></textarea>
        <button type="onSubmit" className={Style.button}>Send Post</button>
      </form>):null
     
      }
    </div>
  )
}
export default PostMessage