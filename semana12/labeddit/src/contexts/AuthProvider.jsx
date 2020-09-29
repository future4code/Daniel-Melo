import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = ({ token, user: userInfo }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userInfo));
    api.defaults.headers.common.Authorization = token;
    setLoggedIn(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (token && userInfo) {
      login({ token, user: userInfo });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete api.defaults.headers.common.Authorization;
    setLoggedIn(false);
    setUser({});
  };

  return (
    <AuthContext.Provider value={{
      loggedIn, user, login, logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
