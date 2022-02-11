import React, { useContext,useEffect } from 'react';
//Components
import Login from './components/Login';
import SignUp from './components/SignUp';
import NarBar from './components/NavBar'

// Loading
import Loading from './pages/Loading'
//Router
import PrivateRoutes from './routers/PrivateRoute';
import { Routes,Route} from 'react-router-dom'
//Context
import {userContext} from'./utils/userContext'



function App() {
  // destructure the returning result of useContext to user state and the setter.
  const {state: currentUserState} = useContext(userContext)
  // try to identify if the user is logged in and have user data in local storage.
  const is_loggedIn = localStorage.getItem('token') && !currentUserState.user
 
  console.log(is_loggedIn)
  // once the user state is changed then it will be rerendered
  useEffect(() => {
  },[])
  

  return (
    <>

    <NarBar is_loggedIn={is_loggedIn}/>
      <Routes>
        <Route exact path='/' element={<Login/>}  />
        <Route exact path='/sign_In' element={<Login/>}  />
        <Route exact path='/sign_up' element={<SignUp/>}  />

      </Routes>


    </>
  );
}

export default App;
