import React, { useEffect } from 'react'
import { useState } from 'react';
import { BackHeader } from '../components/Header'

export default function Setting() {

   const [isDarkMode, setIsDarkMode] = useState(null)

   useEffect(() => {
      setTimeout(() => {
         document.body.classList.remove('animationGoNext');
      }, 100);

      // Dark Mode
      let switchDarkMode = document.querySelector(".dark-mode-switch");
      let checkDarkModeStatus = localStorage.getItem("ThemeDarkmode");
      let pageBodyActive = document.body.classList.contains("dark-mode");

      switchDarkMode.checked = isDarkMode

      // if dark mode on
      if (checkDarkModeStatus === "1" && pageBodyActive) {
         setIsDarkMode(true);
      }
      else {
         setIsDarkMode(false);
      }

      console.log(isDarkMode);
   })


   const switchButtonDarkMode = () => {
      let darkmodeCheck = localStorage.getItem("ThemeDarkmode");
      let bodyCheck = document.body.classList.contains('dark-mode');

      if (darkmodeCheck === 1 || darkmodeCheck === "1" || bodyCheck) {
         document.body.classList.remove("dark-mode");
         localStorage.setItem("ThemeDarkmode", "0");
         setIsDarkMode(false);
      }
      else {
         document.body.classList.add("dark-mode")
         setIsDarkMode(true);
         localStorage.setItem("ThemeDarkmode", "1");
      }
   }

   return (
      <>
         <BackHeader title='Setting' />

         <div id="appCapsule" className="col-md-8 offset-md-2" >
            <div className="section mt-3 text-center">
               <div className="avatar-section">
                  <a href="#">
                     <img src={require('../resources/img/sample/avatar/avatar1.jpg')} alt="avatar" className="imaged w100 rounded" />
                     <span className="button">
                        <ion-icon name="camera-outline" />
                     </span>
                  </a>
               </div>
            </div>
            <div className="listview-title mt-1">Theme</div>
            <ul className="listview image-listview text inset no-line">
               <li>
                  <div className="item">
                     <div className="in">
                        <div>
                           Dark Mode
                        </div>
                        <div className="form-check form-switch  ms-2">
                           <input className="form-check-input dark-mode-switch" type="checkbox" id="darkmodeSwitch" onClick={switchButtonDarkMode} />
                           <label className="form-check-label" htmlFor="darkmodeSwitch" />
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
            <div className="listview-title mt-1">Notifications</div>
            <ul className="listview image-listview text inset">
               <li>
                  <div className="item">
                     <div className="in">
                        <div>
                           Payment Alert
                           <div className="text-muted">
                              Send notification when new payment received
                           </div>
                        </div>
                        <div className="form-check form-switch  ms-2">
                           <input className="form-check-input" type="checkbox" id="SwitchCheckDefault1" />
                           <label className="form-check-label" htmlFor="SwitchCheckDefault1" />
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <a href="#" className="item">
                     <div className="in">
                        <div>Notification Sound</div>
                        <span className="text-primary">Beep</span>
                     </div>
                  </a>
               </li>
            </ul>
            <div className="listview-title mt-1">Profile Settings</div>
            <ul className="listview image-listview text inset">
               <li>
                  <a href="#" className="item">
                     <div className="in">
                        <div>Change Username</div>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#" className="item">
                     <div className="in">
                        <div>Update E-mail</div>
                     </div>
                  </a>
               </li>
               <li>
                  <a href="#" className="item">
                     <div className="in">
                        <div>Address</div>
                        <span className="text-primary">Edit</span>
                     </div>
                  </a>
               </li>
               <li>
                  <div className="item">
                     <div className="in">
                        <div>
                           Private Profile
                        </div>
                        <div className="form-check form-switch ms-2">
                           <input className="form-check-input" type="checkbox" id="SwitchCheckDefault2" />
                           <label className="form-check-label" htmlFor="SwitchCheckDefault2" />
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
            <div className="listview-title mt-1">Security</div>
            <ul className="listview image-listview text mb-2 inset">
               <li>
                  <a href="#" className="item">
                     <div className="in">
                        <div>Update Password</div>
                     </div>
                  </a>
               </li>
               <li>
                  <div className="item">
                     <div className="in">
                        <div>
                           2 Step Verification
                        </div>
                        <div className="form-check form-switch ms-2">
                           <input className="form-check-input" type="checkbox" id="SwitchCheckDefault3" defaultChecked />
                           <label className="form-check-label" htmlFor="SwitchCheckDefault3" />
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <a href="#" className="item">
                     <div className="in">
                        <div>Log out all devices</div>
                     </div>
                  </a>
               </li>
            </ul>
         </div>

      </>
   )
}
