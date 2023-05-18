import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import AuthService from '@utils/api-service/AuthService';

const authURL = process.env.REACT_APP_AUTH_URL;

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const success = new URLSearchParams(window.location.search).get('success');

    console.log({ success });
    if (success) {
      navigate('/');
      return;
    } else {
      window.location.href = authURL;
      return;
    }
  }, []);

  return null;
};

export default Auth;
