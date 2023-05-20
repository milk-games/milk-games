import { PlayerService } from '@utils/api-service';
import AuthService from '@utils/api-service/AuthService';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const login = userData => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    AuthService.logout();
  };

  useEffect(() => {
    PlayerService.getSelf()
      .then(data => login(data))
      .finally(() => setIsLoaded(true));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {isLoaded ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthContext;
