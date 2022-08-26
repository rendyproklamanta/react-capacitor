import React from 'react'
import { NavLink } from "react-router-dom";


function Sidebar() {
   return (
      <div className="modal fade panelbox panelbox-left" id="sidebarPanel" tabIndex={-1} role="dialog">
         <div className="modal-dialog" role="document">
            <div className="modal-content">
               <div className="modal-body p-0">
                  {/* profile box */}
                  <div className="profileBox pt-2 pb-2">
                     <div className="image-wrapper">
                        <img src={require("../resources/img/sample/avatar/avatar1.jpg")} alt="image" className="imaged  w36" />
                     </div>
                     <div className="in">
                        <strong>John Doe</strong>
                        <div className="text-muted">4029209</div>
                     </div>
                     <a href="#" className="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                        <ion-icon name="close-outline" style={{ fontSize: '40px' }} />
                     </a>
                  </div>
                  {/* * profile box */}
                  {/* balance */}
                  <div className="sidebar-balance">
                     <div className="listview-title">Balance</div>
                     <div className="in">
                        <h1 className="amount">$ 2,562.50</h1>
                     </div>
                  </div>
                  {/* * balance */}
                  {/* action group */}
                  <div className="action-group">
                     <a href="index.html" className="action-button">
                        <div className="in">
                           <div className="iconbox">
                              <ion-icon name="add-outline" />
                           </div>
                           Deposit
                        </div>
                     </a>
                     <a href="index.html" className="action-button">
                        <div className="in">
                           <div className="iconbox">
                              <ion-icon name="arrow-down-outline" />
                           </div>
                           Withdraw
                        </div>
                     </a>
                     <a href="index.html" className="action-button">
                        <div className="in">
                           <div className="iconbox">
                              <ion-icon name="arrow-forward-outline" />
                           </div>
                           Send
                        </div>
                     </a>
                     <a href="app-cards.html" className="action-button">
                        <div className="in">
                           <div className="iconbox">
                              <ion-icon name="card-outline" />
                           </div>
                           My Cards
                        </div>
                     </a>
                  </div>
                  {/* * action group */}
                  {/* menu */}
                  <div className="listview-title mt-1">Menu</div>
                  <ul className="listview flush transparent no-line image-listview">
                     <li>
                        <a href="index.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="pie-chart-outline" />
                           </div>
                           <div className="in">
                              Overview
                              <span className="badge badge-primary">10</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="app-pages.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="document-text-outline" />
                           </div>
                           <div className="in">
                              Pages
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="app-components.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="apps-outline" />
                           </div>
                           <div className="in">
                              Components
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="app-cards.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="card-outline" />
                           </div>
                           <div className="in">
                              My Cards
                           </div>
                        </a>
                     </li>
                  </ul>
                  {/* * menu */}
                  {/* others */}
                  <div className="listview-title mt-1">Others</div>
                  <ul className="listview flush transparent no-line image-listview">
                     <li>
                        <a href="app-settings.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="settings-outline" />
                           </div>
                           <div className="in">
                              Settings
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="component-messages.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="chatbubble-outline" />
                           </div>
                           <div className="in">
                              Support
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="app-login.html" className="item">
                           <div className="icon-box bg-primary">
                              <ion-icon name="log-out-outline" />
                           </div>
                           <div className="in">
                              Log out
                           </div>
                        </a>
                     </li>
                  </ul>
                  {/* * others */}
                  {/* send money */}
                  <div className="listview-title mt-1">Send Money</div>
                  <ul className="listview image-listview flush transparent no-line">
                     <li>
                        <a href="#" className="item">
                           <img src={require("../resources/img/sample/avatar/avatar2.jpg")} alt="image" className="image" />
                           <div className="in">
                              <div>Artem Sazonov</div>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="item">
                           <img src={require("../resources/img/sample/avatar/avatar4.jpg")} alt="image" className="image" />
                           <div className="in">
                              <div>Sophie Asveld</div>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="item">
                           <img src={require("../resources/img/sample/avatar/avatar3.jpg")} alt="image" className="image" />
                           <div className="in">
                              <div>Kobus van de Vegte</div>
                           </div>
                        </a>
                     </li>
                  </ul>
                  {/* * send money */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Sidebar