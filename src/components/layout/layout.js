import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Main from "../main/main";
import Style from "./layout.module.css"
const Layout=()=>{
  return (
    <div className={Style.layout}>
      <Header></Header>
      <Navbar></Navbar>
      <Main></Main> 
    </div>
  )
}
export default Layout