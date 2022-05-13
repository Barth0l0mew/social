import React from "react";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import "./App.css";
import Main from "./components/main/main";
import Profile from "./components/profile/profile";
import Message from "./components/message/message";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>  
        <Route path='/' element={<Layout/>}>
          <Route index element={<Profile/>}></Route>
          <Route path='message' element={<Message/>}></Route>
          <Route path='*' element={<h1>not found</h1>}></Route>
        </Route>
      </Routes>
        {/* <Header></Header>
        <Navbar></Navbar>
        <Main>
         
        </Main> */}
        {/* <main className="main">
        <Routes>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/message' element={<Message/>}></Route>
          
          </Routes>
        </main> */}
      </div>
     
    </BrowserRouter>
  );
}

export default App;
