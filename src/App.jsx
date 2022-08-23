import "./resources/sass/style.scss"
import "./utils/bootstrap.bundle.min.jsx";
import "./utils/splide.min.jsx";
import "./utils/index.jsx";

import React from "react";
import Nav from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { DrawerHeader } from "./components/Header";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { AddtoHome } from "./utils/index.jsx";
import Setting from "./pages/Setting";


function App() {

   useEffect(() => {
      AddtoHome("2000", "once");
   })


   return (
      <>

         <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/setting" element={<Setting />} />
         </Routes>

         <BottomNav />

         <Sidebar />

         {/* iOS Add to Home Action Sheet */}
         <div className="modal inset fade action-sheet ios-add-to-home" id="ios-add-to-home-screen" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">Add to Home Screen</h5>
                     <a href="#" className="close-button" data-bs-dismiss="modal">
                        <ion-icon name="close" />
                     </a>
                  </div>
                  <div className="modal-body">
                     <div className="action-sheet-content text-center">
                        <div className="mb-1"><img src={require("./resources/img/icon/192x192.png")} alt="image" className="imaged w64 mb-2" />
                        </div>
                        <div>
                           Install <strong>MyApp</strong> on your iPhone's home screen.
                        </div>
                        <div>
                           Tap <ion-icon name="share-outline" /> and Add to homescreen.
                        </div>
                        <div className="mt-2">
                           <button className="btn btn-primary btn-block" data-bs-dismiss="modal">CLOSE</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* * iOS Add to Home Action Sheet */}
         {/* Android Add to Home Action Sheet */}
         <div className="modal inset fade action-sheet android-add-to-home" id="android-add-to-home-screen" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title">Add to Home Screen</h5>
                     <a href="#" className="close-button" data-bs-dismiss="modal">
                        <ion-icon name="close" />
                     </a>
                  </div>
                  <div className="modal-body">
                     <div className="action-sheet-content text-center">
                        <div className="mb-1">
                           <img src={require("./resources/img/icon/192x192.png")} alt="image" className="imaged w64 mb-2" />
                        </div>
                        <div>
                           Install <strong>MyApp</strong> on your Android's home screen.
                        </div>
                        <div>
                           Tap <ion-icon name="ellipsis-vertical" /> and Add to homescreen.
                        </div>
                        <div className="mt-2">
                           <button className="btn btn-primary btn-block" data-bs-dismiss="modal">CLOSE</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </>
   );
}

export default App;
