import React from "react";
import Style from "./post.module.css"
const Post=({id,title})=>{
  return(
    <div className={Style.post}>
      <img className={Style.foto} src='https://avatars.mds.yandex.net/i?id=416cd2eb6f6af195e694ddb7638cf88d-4662397-images-thumbs&n=13'></img>
      <p className={Style.title}>{title}</p>
    </div>
  )
}
export default Post