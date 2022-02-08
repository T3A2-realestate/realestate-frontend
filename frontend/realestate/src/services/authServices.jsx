import API from "../utils/api"


// making a post request to create a user
export const signUpUser = async (data) => {
    // use error handling
    try {
    // asynchronously post new user data request to specific end point
        const res = await API.post('api/auth/sign_up', data);
        console.log(res.data)
        return res.data;
      } catch (error) {
        return error.response;
      }
}
// Pass user data to async function for signin from API module in utils
export const signInUser = async (data) => {
     // use error handling
     try {
        // asynchronously post new user data request to specific end point
        const res = await API.post('api/auth/sign_in', data);
            console.log(res.data)
            return res.data;
          } catch (error) {
            return error.response;
          }
}