import axios from "axios";
// fetch the current token
if (!!localStorage.getItem("token")) {
  // token = JSON.parse(localStorage.getItem("token"));
  console.log("1" + localStorage.getItem("token"));
}

// making a post request to create a user
export const signUpUser = async (user, dispatch) => {
  // asynchronously post new user data request to specific end point
  await axios({
    method: "post",
    url: "http://localhost:3000/users/sign_in",
    headers: { "Content-Type": "application/json" },
    data: {
      "user": {
        "username": `${user.name}`,
        "email": `${user.email}`,
        "password": `${user.password}`,
      },
    },
  })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.headers.authorization));
      console.log("token: " + token);
      dispatch({
        type: "setLoggedInUser",
        payload: res.headers.authorization,
      });
    })
    .catch((error) => {
      return error.response;
    });
};

// Post a sign in request to sign in
export const signInUser = async (user, dispatch) => {
  // asynchronously post new user data request to specific end point
  await axios({
    method: "post",
    url: "http://localhost:3000/users/sign_in",
    headers: { "Content-Type": "application/json" },
    data: { "user": { "email": `${user.email}`, "password": `${user.password}` } },
  })
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.headers.authorization));
      dispatch({
        type: "setLoggedInUser"
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
