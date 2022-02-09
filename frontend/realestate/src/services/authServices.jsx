import API from "../utils/api";

// making a post request to create a user
export const signUpUser = async (data) => {
  // use error handling
  try {
    // asynchronously post new user data request to specific end point
    const res = await API.post("api/auth/sign_up", data);
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
// Post a sign in request to sign in
export const signInUser = async (data) => {
  // use error handling
  try {
    // asynchronously post new user data request to specific end point
    const res = await API.post("api/auth/sign_in", data);
    console.log(res.data);
  } catch (error) {
    return error.response;
  }
};
// Post sign out request to sign out
export const signOutUser = async (data) => {
  // use error handling
  try {
    // asynchronously post new user data request to specific end point
    const res = await API.post("api/auth/sign_in", data);
    console.log(res.data);
  } catch (error) {
    return error.response;
  }
};

// making a get request to get a single user instance from backend
export const singleUser = async (id) => {
  try {
    const res = await API.get(`/user/${id}`);
    return res.data;
  } catch (error) {
    return error.response;
  }
};

// making a update user request for specific user to backend
export const updateUser = async (data, id) => {
  try {
    const res = await API.put(`/user/${id}`, data);
    return res.data;
  } catch (error) {
    return error.response;
  }
};
