export const checkLoggedIn = () => {
  if (localStorage.getItem("token") !== null) {
    return true;
  } else {
    return false;
  }
};
