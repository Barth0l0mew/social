import React from "react";
import PostPageContainer from "../../newStore/container/postPageContainer";
import Posts from "./posts/posts";
import Style from "./profile.module.css"
import UserInfo from "./userinfo/userInfo";
const Profile=(props)=>{
  console.log ("-----PROFILE---------",props)
  return(
    <section className={Style.profile}>
      <UserInfo user={props.user}></UserInfo>
      <PostPageContainer></PostPageContainer>
      {/* <Posts posts={props.posts} dispatch={props.dispatch}></Posts> */}
    </section>
  )
}
export default Profile