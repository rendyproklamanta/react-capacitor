import React, { useEffect } from 'react'
import { BackHeader, DrawerHeader } from '../components/Header'

export default function Pages(props) {

   // useEffect(() => {
   //    props.setTransitionName("")
   // }, [props])

   return (
      <>
         <DrawerHeader />

         <div className="listview-title mt-1">App Pages</div>
         <ul className="listview image-listview inset mb-2">
            <li>
               <a href="app-transactions.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Transactions
                  </div>
               </a>
            </li>
            <li>
               <a href="app-transaction-detail.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Transaction Detail
                  </div>
               </a>
            </li>
            <li>
               <a href="app-transaction-verification.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Transaction Verification
                  </div>
               </a>
            </li>
            <li>
               <a href="app-cards.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Cards
                  </div>
               </a>
            </li>
            <li>
               <a href="app-savings.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Savings
                  </div>
               </a>
            </li>
            <li>
               <a href="app-bills.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Bills
                  </div>
               </a>
            </li>
            <li>
               <a href="app-notifications.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Notifications
                  </div>
               </a>
            </li>
            <li>
               <a href="app-notification-detail.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Notification Detail
                  </div>
               </a>
            </li>
            <li>
               <a href="app-settings.html" className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Settings
                  </div>
               </a>
            </li>
         </ul>
         <div className="listview-title">Cryptocurrency</div>
         <ul className="listview image-listview inset mb-2">
            <li>
               <a href="crypto-index.html" className="item">
                  <div className="icon-box bg-info">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Home
                  </div>
               </a>
            </li>
            <li>
               <a href="crypto-coin-detail.html" className="item">
                  <div className="icon-box bg-info">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Coin Detail
                  </div>
               </a>
            </li>
            <li>
               <a href="crypto-exchange.html" className="item">
                  <div className="icon-box bg-info">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Exchange
                  </div>
               </a>
            </li>
            <li>
               <a href="crypto-portfolio.html" className="item">
                  <div className="icon-box bg-info">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Portfolio
                  </div>
               </a>
            </li>
            <li>
               <a href="crypto-transactions.html" className="item">
                  <div className="icon-box bg-info">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Transactions
                  </div>
               </a>
            </li>
         </ul>
         <div className="listview-title">Authentication</div>
         <ul className="listview image-listview inset mb-2">
            <li>
               <a href="app-login.html" className="item">
                  <div className="icon-box bg-danger">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Login
                  </div>
               </a>
            </li>
            <li>
               <a href="app-register.html" className="item">
                  <div className="icon-box bg-danger">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Register
                  </div>
               </a>
            </li>
            <li>
               <a href="app-forgot-password.html" className="item">
                  <div className="icon-box bg-danger">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Forgot Password
                  </div>
               </a>
            </li>
            <li>
               <a href="app-sms-verification.html" className="item">
                  <div className="icon-box bg-danger">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     SMS Verification
                  </div>
               </a>
            </li>
            <li>
               <a href="app-qr-code.html" className="item">
                  <div className="icon-box bg-danger">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     QR Code Verification
                  </div>
               </a>
            </li>
         </ul>
         <div className="listview-title">Blog</div>
         <ul className="listview image-listview inset mb-2">
            <li>
               <a href="app-blog.html" className="item">
                  <div className="icon-box bg-secondary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Blog Category
                  </div>
               </a>
            </li>
            <li>
               <a href="app-blog-post.html" className="item">
                  <div className="icon-box bg-secondary">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Blog Post
                  </div>
               </a>
            </li>
         </ul>
         <div className="listview-title">Theme</div>
         <ul className="listview image-listview inset mb-2">
            <li>
               <div className="item">
                  <div className="icon-box bg-primary">
                     <ion-icon name="moon-outline" />
                  </div>
                  <div className="in">
                     <div>Dark Mode</div>
                     <div className="form-check form-switch  ms-2">
                        <input className="form-check-input dark-mode-switch" type="checkbox" id="darkmodeSwitch" />
                        <label className="form-check-label" htmlFor="darkmodeSwitch" />
                     </div>
                  </div>
               </div>
            </li>
         </ul>
         <div className="listview-title">Components</div>
         <ul className="listview image-listview inset mb-2">
            <li>
               <a href="app-components.html" className="item">
                  <div className="icon-box bg-dark">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Discover Components
                  </div>
               </a>
            </li>
         </ul>
         <div className="listview-title">Others</div>
         <ul className="listview image-listview inset mb-3">
            <li>
               <a href="app-about.html" className="item">
                  <div className="icon-box bg-success">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     About Page
                  </div>
               </a>
            </li>
            <li>
               <a href="app-contact.html" className="item">
                  <div className="icon-box bg-success">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Contact
                  </div>
               </a>
            </li>
            <li>
               <a href="app-faq.html" className="item">
                  <div className="icon-box bg-success">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     FAQ
                  </div>
               </a>
            </li>
            <li>
               <a href="app-404.html" className="item">
                  <div className="icon-box bg-success">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     404
                  </div>
               </a>
            </li>
            <li>
               <a href="app-splash.html" className="item">
                  <div className="icon-box bg-success">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Splash Icon
                  </div>
               </a>
            </li>
            <li>
               <a href="app-splash-image.html" className="item">
                  <div className="icon-box bg-success">
                     <ion-icon name="cube-outline" />
                  </div>
                  <div className="in">
                     Splash Image
                  </div>
               </a>
            </li>
         </ul>

      </>
   )
}
