export default function reducer(state, action) {
  switch (action.type) {

    case "setCardsData": {
      console.log("CardData:", action.data);
      return {
        ...state,
        cards: action.data,
      };
    }
    // set the user to current logged in user and change the loaded state to true
    case "setLoggedInUser": {
      console.log("loggedInUser:", action.data);
      return {
        ...state,
        token: action.data,
        userLoaded: true,
      };
    }
   
    
    case "setLogOut":
      return {
        ...state,
        token: null,
        userLoaded: false,
      };

    default:
      return state;
  }
}
