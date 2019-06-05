import { SELECT_HOME } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECT_HOME:
      return action.payload;

    default:
      return state;
  }
}
