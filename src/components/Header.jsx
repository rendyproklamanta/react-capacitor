import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export function DrawerHeader() {
   return (
      <div className={`appHeader bg-primary text-light`}>
         <div className="left">
            <a href="#" className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
               <ion-icon name="menu-outline" />
            </a>
         </div>

         <div className="pageTitle">
            <img src={require('../resources/img/logo.png')} alt="logo" className="logo" webp="true" />
         </div>
         <div className="right">
            <a href="app-notifications.html" className="headerButton">
               <ion-icon className="icon" name="notifications-outline" />
               <span className="badge badge-danger">4</span>
            </a>
            <Link to="setting" className="headerButton">
               <img src={require("../resources/img/sample/avatar/avatar1.jpg")} alt="image" className="imaged w24" />
               <span className="badge badge-danger">6</span>
            </Link>
         </div>
      </div>
   )
}

export function BackHeader(props) {

   const navigate = useNavigate();

   const goBack = () => {
      props.setTransitionName("prev")
      navigate(-1)
   }

   return (
      <div className="appHeader">
         <div className="left">
            <Link to="#" className="headerButton" onClick={() => goBack()}>
               <ion-icon name="chevron-back-outline"></ion-icon>
            </Link>
         </div>
         <div className="pageTitle">
            {props.title}
         </div>
         <div className="right">
         </div>
      </div>
   )
}