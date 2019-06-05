export const SELECT_HOME = "SELECT_HOME";

export const selectHome = home => {
  // console.log(home);
  return {
    type: SELECT_HOME,
    payload: home
  };
};
