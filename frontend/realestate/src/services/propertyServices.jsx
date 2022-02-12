import axios from "axios";


// making a post request to create a property
export const createProperty = async (property, dispatch) => {
  await axios({
    method: "post",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/properties`,
    headers: { "Content-Type": "application/json" },
    data: {
      ...property,
      "user_id":1
    },
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};

// Get all properties
export const getAllProperty = async () => {
  await axios({
    method: "get",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/properties`,
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};
// Get one properties
export const getOneProperty = async (id) => {
  await axios({
    method: "get",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/properties/${id}`,
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};
// search suburb
export const search = async (term) => {
  await axios({
    method: "get",
    url: `${import.meta.env.VITE_APP_API_ENDPOINT}/api/property/search`,
    headers: { "Content-Type": "application/json" }
  })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      return error.response;
    });
};
