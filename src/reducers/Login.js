import { LOGIN } from "../actions";
import axios from "axios";
const baseUrl = "http://localhost:5000" || process.env.baseUrl;
export default function(state = false, action) {
  switch (action.type) {
    case LOGIN:
      return true;

    default:
      return state;
  }
}
