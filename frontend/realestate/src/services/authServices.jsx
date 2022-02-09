import API from "../utils/api";

// fetch the current token
if (localStorage.getItem("token")) {
  token = JSON.parse(localStorage.getItem("token"));
}

// making a post request to create a user
export const signUpUser = async (user, dispatch) => {
  // asynchronously post new user data request to specific end point
  await API.post("api/auth/sign_up", {
    email: user.email,
    password: user.password,
  })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.token));
      console.log("token: " + token);
      dispatch({
        type: "setLoggedInUser",
        payload: res.data.user,
      });
    })
    .catch((error) => {
      return error.response;
    });
};

// Post a sign in request to sign in
export const signInUser = async (user, dispatch) => {
  // asynchronously post new user data request to specific end point
  await API.post("api/auth/sign_in", {
    email: user.email,
    password: user.password,
  })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));

      dispatch({
        type: "setLoggedInUser",
        payload: res.data.user,
      });
    })
    .catch((error) => {
      return error.response;
    });
};

// making a update user request for specific user to backend
export const updateUser = async (user, id) => {
  await API.put(`/user/${id}`, user).catch((error) => {
    return error.response;
  });
};
// making a get request to fetch a specific user data from backend
export const getUser = async (dispatch) => {
  await API.get("api/auth/checkAuth")
    .then((res) => {
      console.log(res);
      dispatch({
        type: "setLoggedInUser",
        payload: res.data.user,
      });
    })
    .catch((error) => {
      return error.response;
    });
};
