import React, {createContext, useContext, useState} from 'react';

const AuthorizationContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false)

  const login = () => {
    setIsAuthorized(true)
  }

  const logout = () => {
    setIsAuthorized(false)
  }
  
  return (
    <AuthorizationContext.Provider value={{ isAuthorized, login, logout}}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export const useAuth = () => useContext(AuthorizationContext)