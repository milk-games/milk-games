const apiURL = process.env.REACT_APP_API_URL;

function loginRedirect() {
  window.location.href = apiURL + window.location.pathname;
}

export { loginRedirect };
