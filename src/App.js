import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Main from "./components/main/main";
import Profile from "./components/profile/profile";
import Message from "./components/message/message";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import News from "./components/news/news";
import { storeRedux } from "./store-redux/store";
import {Provider} from "react-redux"
import User from "./components/user/user";
import { UserPageContainer } from "./newStore/container/userPageContainer";


function App(props) {
  console.log (props)
  return (
    <BrowserRouter>
    
      <div className="App">
      <Routes>  
        <Route path='/' element={<Layout/>}>
          {/* <Route index element={<Profile posts={props.store.getState().postPage} dispatch={props.dispatch}  user={props.user}/>}></Route> */}
          <Route index element={<Profile  user={props.user}/>}></Route>
          <Route path='message' element={<Message/>}></Route>
          <Route path='music' element={<Music></Music>}></Route>
          <Route path='news' element={<News></News>}></Route>
          <Route path='user' element={<UserPageContainer></UserPageContainer>}></Route>
          <Route path='settings' element={<Settings></Settings>}></Route>
          <Route path='message/:id' element={<Message />}></Route>
          <Route path='*' element={<h1>not found</h1>}></Route>
        </Route>
      </Routes>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
