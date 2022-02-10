import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import { signUpUser, signInUser,getUser } from "../services/authServices";

const userState = {
  user: "",
  userLoaded: false,
};

export const userContext= createContext({
  state: userState,
  dispatch: () => {},
  signIn: () => {},
  signUp: () => {},
  getUserData: () => {}
});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, userState);
  const signIn = (data) => signInUser(data, dispatch);
  const signUp = (data) => signUpUser(data, dispatch);
  const getUserData = () => getUser(dispatch);
  return (
    <userContext.Provider value={{ state, dispatch,signIn,signUp,getUserData}}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
