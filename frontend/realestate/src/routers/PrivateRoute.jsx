import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../utils/userContext";


const PrivateRoutes = ({ children, ...props }) => {
  const navigate = useNavigate();
  const { state: userState } = useContext(userContext);

  return (
    <Fragment>
      {!!localStorage.getItem("token") && !!userState.token ? (
        <Route {...props}>{children}</Route>
      ) : (
        navigate("/")
      )}
    </Fragment>
  );
};

export default PrivateRoutes;
