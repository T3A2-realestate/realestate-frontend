import API from "../utils/api"


// making a get request to get a properties list data
export const allProperties = async () => {
    // use error handling
    try {
        const res = await API.get('api/properties');
        console.log(res.data);
        return res.data;
      } catch (error) {
          return error.response;
    }
}
// making a get request to get a specific property data
export const singleProperty = async (id) => {
     // use error handling
     try {
        const res = await API.get(`api/properties/${id}`);
            console.log(res.data)
          } catch (error) {
            return error.response;
          }
}
// making a get request to get a search result data with same title
export const searchTitle = async (title) => {
     // use error handling
     try {
        const res = await API.get(`api/properties/title/search?title=${title}`);
            console.log(res.data)
          } catch (error) {
            return error.response;
          }
}

