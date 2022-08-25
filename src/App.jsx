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
import {
   BrowserRouter,
   Route,
   useLocation,
   Routes
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const Main = styled.main``;


const AnimatedRoutes = () => {

   const location = useLocation();
   //console.log("location", location);

   const [transitionName, setTransitionName] = useState('prev');

   useEffect(() => {
      // Show BottomNav
      document.querySelector(".appBottomMenu").style.display = "";

      if (transitionName === "next") setTransitionName("prev");
      if (transitionName === "prev") setTransitionName("next");
   }, [location]);


   return (
      <TransitionGroup component={Main}>

         <CSSTransition key={location.pathname} classNames={transitionName} timeout={50}>
            <div>
               <Routes location={location}>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route path="/setting" element={<Setting />} />
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

   const Wrapper = ({ children }) => {
      const location = useLocation();
      useLayoutEffect(() => {
         document.documentElement.scrollTo(0, 0);
      }, [location.pathname]);
      return children
   }


   return (
      <BrowserRouter>
         <Wrapper>
            <AnimatedRoutes />
         </Wrapper>
      </BrowserRouter>
   );
}

export default App;
