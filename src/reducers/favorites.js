import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      if (state.includes(action.payload)) {
        return state;
      }
      return [...state, action.payload];

    case REMOVE_FAVORITE:
      let newArray = state.filter(item => item !== action.payload);
      console.log("new array", newArray);
      return newArray;

    default:
      return state;
  }
}
