import React, { useContext, createContext,useEffect } from 'react';
//Components
import Login from './components/Login';


// Loading
import Loading from './pages/Loading'
//Router
import PrivateRoutes from './routers/PrivateRoute';
import { Routes,Route} from 'react-router-dom'
//Context
import {userContext} from'./utils/userContext'



function App() {
  // destructure the returning result of useContext to user state and the setter.
  const {state: currentUserState, getUserData} = useContext(userContext)
  // try to identify if the user is logged in and have user data in local storage.
  const unloadedUser = (localStorage.getItem('token') && !currentUserState.user) 
  // if the token exists in the local storage and yet the user data doesn't then the
 // it will try to use axios to send to request 
  if (unloadedUser){
    fetchUser()
  }

  // once the user state is changed then it will be rerendered
  useEffect(() => {
  },[])
  

  return (
    <>

    {unloadedUser ?
      <Loading/>
      :
      <Routes>
        <Route exact path='/' element={<Login/>}  />
      </Routes>
    }

    </>
  );
}

export default App;
