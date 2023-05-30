const apiURL = process.env.REACT_APP_API_URL;

const roles = {
  ADMIN: 'ROLE_ADMIN',
};

function loginRedirect() {
  console.log('redirecting: ' + apiURL + window.location.pathname);
  window.location.href = apiURL + window.location.pathname;
}

export { roles, loginRedirect };
