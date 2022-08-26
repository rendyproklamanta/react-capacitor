import "./resources/sass/style.scss"
import "./utils/bootstrap.bundle.min.jsx";
import "./utils/splide.min.jsx";
import "./utils/index.jsx";

import React, { useLayoutEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import BottomNav from "./components/BottomNav";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import { AddtoHome } from "./utils/index.jsx";
import Setting from "./pages/Setting";
import AddToHome from "./components/AddToHome";
import { BrowserRouter, Route, useLocation, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Pages from "./pages/Pages";
import Components from "./pages/Components";
import Cards from "./pages/Cards";

const Main = styled.main``;


const AnimatedRoutes = () => {

   const location = useLocation();
   const [transitionName, setTransitionName] = useState('next');

   useEffect(() => {
      // Show BottomNav
      document.querySelector(".appBottomMenu").style.display = "";
      //setTransitionName('');
      // if (transitionName === "next") setTransitionName("");
      //if (transitionName == "prev") setTransitionName("");
   }, [location]);


   return (
      <TransitionGroup component={Main}>

         <CSSTransition key={location.pathname} classNames={transitionName} timeout={100}>
            <div id="appCapsule" className="col-md-8 offset-md-2" >
               <Routes location={location}>
                  <Route exact path="/" element={<Dashboard setTransitionName={setTransitionName} />} />
                  <Route path="/setting" element={<Setting setTransitionName={setTransitionName} />} />
                  <Route path="/pages" element={<Pages setTransitionName={setTransitionName} />} />
                  <Route path="/components" element={<Components setTransitionName={setTransitionName} />} />
                  <Route path="/cards" element={<Cards setTransitionName={setTransitionName} />} />
               </Routes>
            </div>
         </CSSTransition>

         <BottomNav />
         <Sidebar />
         <AddToHome />

      </TransitionGroup>
   );
};


function App() {

   useEffect(() => {
      AddtoHome("2000", "once");
   })

   const ScrollToTop = ({ children }) => {
      const { pathname } = useLocation();

      useEffect(() => {
         const canControlScrollRestoration = 'scrollRestoration' in window.history
         if (canControlScrollRestoration) {
            window.history.scrollRestoration = 'manual';
         }

         window.scrollTo(0, 0);
      }, [pathname]);

      return children;
   }

   return (
      <BrowserRouter>
         <ScrollToTop />
         <AnimatedRoutes />
      </BrowserRouter>
   );
}

export default App;
