import React from "react";
import Style from "./main.module.css"
import Profile from "../profile/profile";
import Message from "../message/message";
import { Switch, Route, Routes , Outlet} from "react-router-dom";

const Main=()=>{
  return(
    <main className={Style.main}>
      <Outlet></Outlet>
      {/* <Routes>  
        <Route path='/' element>
          <Route path='/' element={<Profile/>}></Route>
          <Route path='/message' element={<Message/>}></Route>
        </Route>
      </Routes> */}
      {/* <Profile></Profile>
      <Message></Message> */}
    </main>
  )
}
export default Main