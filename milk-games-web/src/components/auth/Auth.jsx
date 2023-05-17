import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import AuthService from '@utils/api-service/AuthService';

const authURL = process.env.REACT_APP_AUTH_URL;

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return;
    // if (!code) {
    //   code = new URLSearchParams(window.location.search).get('code');
    // }

    // if (!code) {
    //   window.location.href = authURL;
    //   return;
    // } else {
    //   AuthService.auth(code).then(res => {
    //     console.log(res);
    //   });
    //   return;
    // }
  }, []);

  return null;
};

export default Auth;
