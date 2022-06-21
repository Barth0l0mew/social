import React from "react";
import Post from "./post/post";
import Style from './posts.module.css'
const Posts=(props)=>{
 console.log (props,'post')
  const handler =(event)=>{
    event.preventDefault();
    props.addPost()
  }
  const setdata=(event)=>{
    props.updateNewPost(event.target.value)
  }
  return (
    <div className="posts">
      
      <form action="#" className={Style.form} onSubmit={handler}>
        <textarea placeholder="Mypost" className={Style.textarea} onChange={setdata} value={props.newPost} ></textarea>
        <button type="onSubmit" className={Style.button}>Send Post</button>
      </form>
      {props.posts.map((el=><Post key={el.id} id={el.id} title={el.title}></Post>))}
    </div>
  )
}
export default Posts