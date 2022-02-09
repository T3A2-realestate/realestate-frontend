export default function reducer(state, action) {
  switch (action.type) {
    case "setMessages": {
      console.log("Messages:", action.data);
      return {
        ...state,
        messages: action.data,
      };
    }

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
        loggedInUser: action.data,
        loaded: true,
      };
    }
   
    case "setToken": {
      console.log("Token:", action.data);
      return {
        ...state,
        token: action.data,
      };
    }
    case "setLogOut":
      return {
        ...state,
        user: null,
        loaded: false,
      };
    case "updateUser":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
