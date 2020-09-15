import React, {
  createContext, useContext, useState, useEffect,
} from 'react';

const AuthorizationContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem('logged')) && setIsAuthorized(true);
  }, []);

  const login = () => {
    localStorage.setItem('logged', JSON.stringify(true));
    setIsAuthorized(true);
  };

  const logout = () => {
    localStorage.removeItem('logged');
    setIsAuthorized(false);
  };

  return (
    <AuthorizationContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthorizationContext);
