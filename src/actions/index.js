export const SELECT_HOME = "SELECT_HOME";
export const ADD_FAVORITE = "ADD_FAVORITE";

export const selectHome = home => {
  // console.log(home);
  return {
    type: SELECT_HOME,
    payload: home
  };
};

export const addFavorite = id => {
  return {
    type: ADD_FAVORITE,
    payload: id
  };
};
