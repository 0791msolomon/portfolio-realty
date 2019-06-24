export const SELECT_HOME = "SELECT_HOME";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITES";
export const LOGIN = "LOGIN";
export const selectHome = home => {
  // console.log(home);
  return {
    type: SELECT_HOME,
    payload: home
  };
};

export const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE,
    payload: id
  };
};

export const addFavorite = id => {
  return {
    type: ADD_FAVORITE,
    payload: id
  };
};

export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: { email, password }
  };
};
