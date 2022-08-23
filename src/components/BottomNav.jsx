import React from 'react'
import { NavLink } from "react-router-dom";

export default function BottomNav() {
   return (
      <div className="appBottomMenu">

         <NavLink to="" className={({ isActive }) => isActive ? "item active" : "item"} >
            <div className="col">
               <ion-icon name="pie-chart-outline" />
               <span className='title'>Dashboard</span>
            </div>
         </NavLink>

         <NavLink to="pages" className={({ isActive }) => isActive ? "item active" : "item"} >
            <div className="col">
               <ion-icon name="document-text-outline" />
               <span className='title'>Pages</span>
            </div>
         </NavLink>

         <NavLink to="component" className={({ isActive }) => isActive ? "item active" : "item"} >
            <div className="col">
               <ion-icon name="apps-outline" />
               <span className='title'>Components</span>
            </div>
         </NavLink>

         <NavLink to="pages" className={({ isActive }) => isActive ? "item active" : "item"} >
            <div className="card">
               <ion-icon name="card-outline" />
               <span className='title'>My Cards</span>
            </div>
         </NavLink>

         <NavLink to="setting" className={({ isActive }) => isActive ? "item active" : "item"} >
            <div className="col">
               <ion-icon name="settings-outline" />
               <span className='title'>Setting</span>
            </div>
         </NavLink>

      </div>
   )
}
