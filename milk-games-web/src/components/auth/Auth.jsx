import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const authURL = process.env.REACT_APP_API_URL;

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }

    const token = new URLSearchParams(window.location.search).get('code');
    console.log({ token });

    if (token) {
      localStorage.setItem('token', token);
      navigate('/');
    }

    window.location.href = authURL;
    return;
  }, []);

  return null;
};

export default Auth;
