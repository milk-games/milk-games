/**
 * @typedef {import("@types/index.d").Player} Player
 */

import { PlayerService } from '@utils/api-service';
import AuthService from '@utils/api-service/AuthService';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  /**
   * @type {[Player, Function]}
   */
  const [user, setUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const login = userData => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    AuthService.logout();
  };

  const hasRole = roleName => {
    if (!user) return false;
    for (const { role } of user.roles) {
      if (role === roleName) return true;
    }
    return false;
  };

  useEffect(() => {
    if (process.env.REACT_APP_AUTH_ENABLED) {
      PlayerService.getSelf()
        .then(data => login(data))
        .finally(() => setIsLoaded(true));
    } else {
      //TODO: remove
      login({ name: 'User', id: '123', roles: ['ADMIN'] });
      setIsLoaded(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, hasRole }}>
      {isLoaded ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthContext;
