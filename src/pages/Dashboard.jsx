import React, { useEffect } from 'react'
import Img, { Svg } from 'react-optimized-image';
import { Link } from 'react-router-dom';
import { ActionSheetAddBalance, ActionSheetExchangeMoney, ActionSheetSendMoney, ActionSheetWithdraw } from '../components/ActionSheet';
import { DrawerHeader } from '../components/Header';

export default function Dashboard() {

   // const goNextPage = () => {
   //    document.body.classList.add('animationGoNext');
   // }


   useEffect(() => {
      // document.body.classList.remove('animationGoBack');

      // Full Carousel
      document.querySelectorAll('.carousel-full').forEach(carousel => new Splide(carousel, {
         perPage: 1,
         rewind: true,
         type: "loop",
         gap: 0,
         arrows: false,
         pagination: false,
      }).mount());

      // Single Carousel
      document.querySelectorAll('.carousel-single').forEach(carousel => new Splide(carousel, {
         perPage: 3,
         rewind: true,
         type: "loop",
         gap: 16,
         padding: 16,
         arrows: false,
         pagination: false,
         breakpoints: {
            768: {
               perPage: 1
            },
            991: {
               perPage: 2
            }
         }
      }).mount());

      // Multiple Carousel
      document.querySelectorAll('.carousel-multiple').forEach(carousel => new Splide(carousel, {
         perPage: 4,
         rewind: true,
         type: "loop",
         gap: 16,
         padding: 16,
         arrows: false,
         pagination: false,
         breakpoints: {
            768: {
               perPage: 2
            },
            991: {
               perPage: 3
            }
         }
      }).mount());

      // Small Carousel
      document.querySelectorAll('.carousel-small').forEach(carousel => new Splide(carousel, {
         perPage: 9,
         rewind: false,
         type: "loop",
         gap: 16,
         padding: 16,
         arrows: false,
         pagination: false,
         breakpoints: {
            768: {
               perPage: 4
            },
            991: {
               perPage: 7
            }
         }
      }).mount());

      // Slider Carousel
      document.querySelectorAll('.carousel-slider').forEach(carousel => new Splide(carousel, {
         perPage: 1,
         rewind: false,
         type: "loop",
         gap: 16,
         padding: 16,
         arrows: false,
         pagination: true
      }).mount());

      // Stories Carousel
      document.querySelectorAll('.story-block').forEach(carousel => new Splide(carousel, {
         perPage: 16,
         rewind: false,
         type: "slide",
         gap: 16,
         padding: 16,
         arrows: false,
         pagination: false,
         breakpoints: {
            500: {
               perPage: 4
            },
            768: {
               perPage: 7
            },
            1200: {
               perPage: 11
            }
         }
      }).mount());
   }, [])

   return (
      <>
         <DrawerHeader />

         <div className='blue-top-bg'></div>

         <div id="appCapsule" className="col-md-8 offset-md-2" >
            {/* Wallet Card */}
            <div className="section wallet-card-section pt-1" >
               <div className="wallet-card">
                  {/* Balance */}
                  <div className="balance">
                     <div className="left">
                        <span className="title">Total Balance</span>
                        <h1 className="total">$ 2,562.50</h1>
                     </div>
                     <div className="right">
                        <a href="#" className="button" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                           <ion-icon name="add-outline" />
                        </a>
                     </div>
                  </div>
                  {/* * Balance */}
                  {/* Wallet Footer */}
                  <div className="wallet-footer">
                     <div className="item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                           <div className="icon-wrapper bg-danger">
                              <ion-icon name="arrow-down-outline" />
                           </div>
                           <strong>Withdraw</strong>
                        </a>
                     </div>
                     <div className="item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#sendActionSheet">
                           <div className="icon-wrapper">
                              <ion-icon name="arrow-forward-outline" />
                           </div>
                           <strong>Send</strong>
                        </a>
                     </div>
                     <div className="item">
                        <a href="app-cards.html">
                           <div className="icon-wrapper bg-success">
                              <ion-icon name="card-outline" />
                           </div>
                           <strong>Cards</strong>
                        </a>
                     </div>
                     <div className="item">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exchangeActionSheet">
                           <div className="icon-wrapper bg-warning">
                              <ion-icon name="swap-vertical" />
                           </div>
                           <strong>Exchange</strong>
                        </a>
                     </div>
                  </div>
                  {/* * Wallet Footer */}
               </div>
            </div >
            {/* Wallet Card */}

            {/* List of Action Sheets */}

            <ActionSheetAddBalance />

            <ActionSheetWithdraw />

            <ActionSheetSendMoney />

            <ActionSheetExchangeMoney />


            {/* Stats */}
            <div className="section">
               <div className="row mt-2">
                  <div className="col-6">
                     <div className="stat-box">
                        <div className="title">Income</div>
                        <div className="value text-success">$ 552.95</div>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="stat-box">
                        <div className="title">Expenses</div>
                        <div className="value text-danger">$ 86.45</div>
                     </div>
                  </div>
               </div>
               <div className="row mt-2">
                  <div className="col-6">
                     <div className="stat-box">
                        <div className="title">Total Bills</div>
                        <div className="value">$ 53.25</div>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="stat-box">
                        <div className="title">Savings</div>
                        <div className="value">$ 120.99</div>
                     </div>
                  </div>
               </div>
            </div>
            {/* * Stats */}
            {/* Transactions */}
            <div className="section mt-4">
               <div className="section-heading">
                  <h2 className="title">Transactions</h2>
                  <a href="app-transactions.html" className="link">View All</a>
               </div>
               <div className="transactions">
                  {/* item */}
                  <Link to="setting" className="item">
                     <div className="detail">
                        <img src={require("../resources/img/sample/brand/1.jpg")} alt="img" className="image-block imaged w48" />
                        <div>
                           <strong>Amazon</strong>
                           <p>Shopping</p>
                        </div>
                     </div>
                     <div className="right">
                        <div className="price text-danger"> - $ 150</div>
                     </div>
                  </Link>
                  {/* * item */}
                  {/* item */}
                  <a href="app-transaction-detail.html" className="item">
                     <div className="detail">
                        <img src={require("../resources/img/sample/brand/2.jpg")} alt="img" className="image-block imaged w48" />
                        <div>
                           <strong>Apple</strong>
                           <p>Appstore Purchase</p>
                        </div>
                     </div>
                     <div className="right">
                        <div className="price text-danger">- $ 29</div>
                     </div>
                  </a>
                  {/* * item */}
                  {/* item */}
                  <a href="app-transaction-detail.html" className="item">
                     <div className="detail">
                        <img src={require("../resources/img/sample/avatar/avatar3.jpg")} alt="img" className="image-block imaged w48" />
                        <div>
                           <strong>Alex Ljung</strong>
                           <p>Transfer</p>
                        </div>
                     </div>
                     <div className="right">
                        <div className="price">+ $ 1,000</div>
                     </div>
                  </a>
                  {/* * item */}
                  {/* item */}
                  <a href="app-transaction-detail.html" className="item">
                     <div className="detail">
                        <img src={require("../resources/img/sample/avatar/avatar4.jpg")} alt="img" className="image-block imaged w48" />
                        <div>
                           <strong>Beatriz Brito</strong>
                           <p>Transfer</p>
                        </div>
                     </div>
                     <div className="right">
                        <div className="price text-danger">- $ 186</div>
                     </div>
                  </a>
                  {/* * item */}
               </div>
            </div>
            {/* * Transactions */}

            {/* my cards */}
            <div className="section full mt-4">
               <div className="section-heading padding">
                  <h2 className="title">My Cards</h2>
                  <a href="app-cards.html" className="link">View All</a>
               </div>
               {/* carousel single */}
               <div className="carousel-single splide">
                  <div className="splide__track">
                     <ul className="splide__list">
                        <li className="splide__slide">
                           {/* card block */}
                           <div className="card-block bg-primary">
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
                        </li>
                        <li className="splide__slide">
                           {/* card block */}
                           <div className="card-block bg-dark">
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
                        </li>
                        <li className="splide__slide">
                           {/* card block */}
                           <div className="card-block bg-secondary">
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
                        </li>
                     </ul>
                  </div>
               </div>
               {/* * carousel single */}
            </div>
            {/* * my cards */}
            {/* Send Money */}
            <div className="section full mt-4">
               <div className="section-heading padding">
                  <h2 className="title">Send Money</h2>
                  <a href="#" className="link">Add New</a>
               </div>
               {/* carousel small */}
               <div className="carousel-small splide">
                  <div className="splide__track">
                     <ul className="splide__list">
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar2.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Jurrien</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar3.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Elwin</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar4.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Alma</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar5.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Justine</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar6.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Maria</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar7.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Pamela</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar8.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Neville</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar9.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Alex</strong>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="#">
                              <div className="user-card">
                                 <img src={require("../resources/img/sample/avatar/avatar10.jpg")} alt="img" className="imaged w-100" />
                                 <strong>Stina</strong>
                              </div>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* * carousel small */}
            </div>
            {/* * Send Money */}
            {/* Monthly Bills */}
            <div className="section full mt-4">
               <div className="section-heading padding">
                  <h2 className="title">Monthly Bills</h2>
                  <a href="app-bills.html" className="link">View All</a>
               </div>
               {/* carousel multiple */}
               <div className="carousel-multiple splide">
                  <div className="splide__track">
                     <ul className="splide__list">
                        <li className="splide__slide">
                           <div className="bill-box">
                              <div className="img-wrapper">
                                 <img src={require("../resources/img/sample/brand/1.jpg")} alt="img" className="image-block imaged w48" />
                              </div>
                              <div className="price">$ 14</div>
                              <p>Prime Monthly Subscription</p>
                              <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                           </div>
                        </li>
                        <li className="splide__slide">
                           <div className="bill-box">
                              <div className="img-wrapper">
                                 <img src={require("../resources/img/sample/brand/2.jpg")} alt="img" className="image-block imaged w48" />
                              </div>
                              <div className="price">$ 9</div>
                              <p>Music Monthly Subscription</p>
                              <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                           </div>
                        </li>
                        <li className="splide__slide">
                           <div className="bill-box">
                              <div className="img-wrapper">
                                 <div className="iconbox bg-danger">
                                    <ion-icon name="medkit-outline" />
                                 </div>
                              </div>
                              <div className="price">$ 299</div>
                              <p>Monthly Health Insurance</p>
                              <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                           </div>
                        </li>
                        <li className="splide__slide">
                           <div className="bill-box">
                              <div className="img-wrapper">
                                 <div className="iconbox">
                                    <ion-icon name="card-outline" />
                                 </div>
                              </div>
                              <div className="price">$ 962</div>
                              <p>Credit Card Statement
                              </p>
                              <a href="#" className="btn btn-primary btn-block btn-sm">PAY NOW</a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* * carousel multiple */}
            </div>
            {/* * Monthly Bills */}
            {/* Saving Goals */}
            <div className="section mt-4">
               <div className="section-heading">
                  <h2 className="title">Saving Goals</h2>
                  <a href="app-savings.html" className="link">View All</a>
               </div>
               <div className="goals">
                  {/* item */}
                  <div className="item">
                     <div className="in">
                        <div>
                           <h4>Gaming Console</h4>
                           <p>Gaming</p>
                        </div>
                        <div className="price">$ 499</div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                     </div>
                  </div>
                  {/* * item */}
                  {/* item */}
                  <div className="item">
                     <div className="in">
                        <div>
                           <h4>New House</h4>
                           <p>Living</p>
                        </div>
                        <div className="price">$ 100,000</div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>55%</div>
                     </div>
                  </div>
                  {/* * item */}
                  {/* item */}
                  <div className="item">
                     <div className="in">
                        <div>
                           <h4>Sport Car</h4>
                           <p>Lifestyle</p>
                        </div>
                        <div className="price">$ 42,500</div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}>15%</div>
                     </div>
                  </div>
                  {/* * item */}
               </div>
            </div>
            {/* * Saving Goals */}
            {/* News */}
            <div className="section full mt-4 mb-3">
               <div className="section-heading padding">
                  <h2 className="title">Lastest News</h2>
                  <a href="app-blog.html" className="link">View All</a>
               </div>
               {/* carousel multiple */}
               <div className="carousel-multiple splide">
                  <div className="splide__track">
                     <ul className="splide__list">
                        <li className="splide__slide">
                           <a href="app-blog-post.html">
                              <div className="blog-card">
                                 <img src={require("../resources/img/sample/photo/1.jpg")} alt="image" className="imaged w-100" />
                                 <div className="text">
                                    <h4 className="title">What will be the value of bitcoin in the next...</h4>
                                 </div>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="app-blog-post.html">
                              <div className="blog-card">
                                 <img src={require("../resources/img/sample/photo/2.jpg")} alt="image" className="imaged w-100" />
                                 <div className="text">
                                    <h4 className="title">Rules you need to know in business</h4>
                                 </div>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="app-blog-post.html">
                              <div className="blog-card">
                                 <img src={require("../resources/img/sample/photo/3.jpg")} alt="image" className="imaged w-100" />
                                 <div className="text">
                                    <h4 className="title">10 easy ways to save your money</h4>
                                 </div>
                              </div>
                           </a>
                        </li>
                        <li className="splide__slide">
                           <a href="app-blog-post.html">
                              <div className="blog-card">
                                 <img src={require("../resources/img/sample/photo/4.jpg")} alt="image" className="imaged w-100" />
                                 <div className="text">
                                    <h4 className="title">Follow the financial agenda with...</h4>
                                 </div>
                              </div>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* * carousel multiple */}
            </div>
         </div>
      </>
   )

}