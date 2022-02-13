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
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Sell from "./pages/Sell";
import NotFound from "./pages/NotFound";
// Redirect method
import { useNavigate } from "react-router-dom";

function App() {
  // destructure the returning result of useContext to user state and the setter.
  const { state: currentUserState } = useContext(userContext);
  // try to identify if the user is logged in and have user data in local storage.
  const is_loggedIn =
    !!localStorage.getItem("token") && !!currentUserState.token;
    const navigate = useNavigate();
  // once the user state is changed then it will be rerendered
  useEffect(() => {
  }, []);

  return (
    <>
      <NarBar />
      <Routes>
        <Route exact path="/" element={<Login is_loggedIn={is_loggedIn}/>} />
        <Route exact path="/sign_In" element={<Login />} />
        <Route exact path="/sign_up" element={<SignUp />} />
        <PrivateRoutes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/listing" element={<Listing />} />
        <Route exact path="/sell" element={<Sell />} />
        </PrivateRoutes>
        <Route  element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
