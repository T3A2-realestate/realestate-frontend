import React, { useContext, useEffect } from "react";
//Components
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NarBar from "./components/NavBar";

// Loading
import Loading from "./pages/Loading";
//Router
import PrivateRoutes from "./routers/PrivateRoute";
import { Routes, Route } from "react-router-dom";
//Context
import { userContext } from "./utils/userContext";
//Page
import Home from './pages/Home'
import Listing from './pages/Listing'
import Sell from './pages/Sell'

function App() {
  // destructure the returning result of useContext to user state and the setter.
  const { state: currentUserState } = useContext(userContext);
  // try to identify if the user is logged in and have user data in local storage.
  const is_loggedIn = !!localStorage.getItem("token") && !!currentUserState.token

  // once the user state is changed then it will be rerendered
  useEffect(() => {console.log(currentUserState)
    console.log(is_loggedIn)}, [currentUserState]);

  return (
    <>
      <NarBar/>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/sign_In" element={<Login />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/listing" element={<Listing />} />
        <Route exact path="/sell" element={<Sell />} />
      </Routes>
    </>
  );
}

export default App;
