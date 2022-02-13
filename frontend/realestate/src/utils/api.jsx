import axios from 'axios'
// An axios instance is created and this instance is for fetching custom request to the url with specific endpoint

export const API = axios.create({
	// The base URL is required in an axios instance
	baseURL: import.meta.env.VITE_APP_API_ENDPOINT || "https://realestate-app123.netlify.app/",
	// I set the time out for request to be 10 seconds
	timeout : 10000,
    // I set the request can have cookies
    'Access-Control-Allow-Credentials':true
})


// assingning to request headers authorization the bearer and getting the token 
// from local storage after user logged in to 
// use as an interceptor to give user permission to prform CRUD on any request

// Here an interceptors is added to implement some function before the request is sent out
API.interceptors.request.use((config) => {
  // If there is a AuthorizationToken exists in the localStorage, then it will be assign to request header then the server knows 
  // user is logged in.
  config.headers.common['Authorization'] = `Bearer ${localStorage.getItem('authToken')}` || '';
  config.headers.common['Access-Control-Allow-Origin'] = 'https://realestate-rails-api.herokuapp.com/';
  config.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
	return config;
  }, (err) => {
	if (err.response) { 
		// Dealing with specific status code
	  switch (err.response.status) {
		case '403':
		  // todo: handler server forbidden error
		  break;
		  // todo: handler other status code
		default:
		  break;
	  }
	  return Promise.reject(err.response);
	}
		// Dealing with off line
	if (!window.navigator.online) { 
	  // todo: jump to offline page
	  return 
	}
	return Promise.reject(err);
  });


export default API