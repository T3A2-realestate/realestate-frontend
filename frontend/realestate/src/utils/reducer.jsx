export default function reducer(state, action) {
    const { type, data } = action;

    switch(action.type) {
      case 'setMessages': {
        console.log("Messages:", action.data)
        return {
          ...state,
          messages: action.data
        }
      }
      
      case 'setCardsData': {
        console.log("CardData:", action.data)
        return {
          ...state,
          cards: action.data
        }
      }
      case "setLoggedInUser": {
        console.log("loggedInUser:", action.data)
        return {
            ...state,
            loggedInUser: action.data
        }
    }
      case 'setToken': {
        console.log("Token:", action.data)
        return {
          ...state,
          token: action.data
        }
      }
      
      default: return state
    }
  }