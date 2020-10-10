import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ token, user: userInfo }) => {
    localStorage.setItem('user', JSON.stringify({ ...userInfo, token }));
    api.defaults.headers.common.Authorization = token;
    setUser(userInfo);
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo) {
      login({ token: userInfo.token, user: userInfo });
    } else {
      setUser(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    delete api.defaults.headers.common.Authorization;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user, login, logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
