import React from 'react'
import { DrawerHeader } from '../components/Header'

export default function Cards() {
   return (
      <>
         <DrawerHeader />

         <div className="section mt-2">
            {/* card block */}
            <div className="card-block mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 1,256,90</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
            {/* card block */}
            <div className="card-block bg-secondary mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 521,44</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
            {/* card block */}
            <div className="card-block bg-success mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 52,60</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
            {/* card block */}
            <div className="card-block bg-danger mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 1,256,90</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
            {/* card block */}
            <div className="card-block bg-warning mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 1,256,90</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
            {/* card block */}
            <div className="card-block bg-info mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 1,256,90</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
            {/* card block */}
            <div className="card-block bg-dark mb-2">
               <div className="card-main">
                  <div className="card-button dropdown">
                     <button type="button" className="btn btn-link btn-icon" data-bs-toggle="dropdown">
                        <ion-icon name="ellipsis-horizontal" />
                     </button>
                     <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                           <ion-icon name="pencil-outline" />Edit
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="close-outline" />Remove
                        </a>
                        <a className="dropdown-item" href="#">
                           <ion-icon name="arrow-up-circle-outline" />Upgrade
                        </a>
                     </div>
                  </div>
                  <div className="balance">
                     <span className="label">BALANCE</span>
                     <h1 className="title">$ 1,256,90</h1>
                  </div>
                  <div className="in">
                     <div className="card-number">
                        <span className="label">Card Number</span>
                        •••• 9905
                     </div>
                     <div className="bottom">
                        <div className="card-expiry">
                           <span className="label">Expiry</span>
                           12 / 25
                        </div>
                        <div className="card-ccv">
                           <span className="label">CCV</span>
                           553
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * card block */}
         </div>

      </>
   )
}
