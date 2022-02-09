import Context from "./globalContext";
import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import { signUpUser, signInUser } from "../services/authServices";

const userState = {
  user: "",
  userLoaded: false,
};

export const userContext = createContext({
  state: userState,
  dispatch: () => {},
  signIn: () => {},
  signUp: () => {},
});

const userProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, userState);
  const signIn = (data) => signInUser(data, dispatch);
  const signUp = (data) => signUpUser(data, dispatch);
  return (
    <Context.Provider value={{ state, dispatch, signIn, signUp }}>
      {children}
    </Context.Provider>
  );
};

export default userProvider;
