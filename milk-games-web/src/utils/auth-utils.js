const apiURL = process.env.REACT_APP_API_URL;

const roles = {
  ADMIN: 'ROLE_ADMIN',
};

function loginRedirect() {
  window.location.href =
    apiURL + '/oauth2?redirectPath=' + window.location.pathname;
}

export { roles, loginRedirect };
