import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import api from '../services/api';

const AuthorizationContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.common.auth = token;
      setIsAuthorized(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    api.defaults.headers.common.auth = token;
    setIsAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common.auth;
    setIsAuthorized(false);
  };

  return (
    <AuthorizationContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthorizationContext);
