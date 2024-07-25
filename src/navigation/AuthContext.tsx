import React, { createContext, useState, useContext,useEffect } from "react";
import { authService } from 'joegreen-service-library'

// Define the shape of your auth context
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token:string) => void;
  logout: () => void;
}
interface isValidResponseType {
  isValid: boolean
}

// Create the context with initial values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component to wrap your app and provide context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //default auth state is not authenticated. then use effect checks if there is an accessToken
  // if it exists, then i check to see if it is valid and not expired, if it is not expired, then the state can be updated to true, othewise it stays in false, and the expired message is displayed.
  let accessToken: string | undefined = window.localStorage.getItem('accessToken')
  async function checkValidity (): Promise<void>{
    try{
      let response = await authService.isValid(accessToken)
      if(response.isValid){
        setIsAuthenticated(true)
      }

      console.log({response})
    }
    catch(err){
      console.error(err)
    }
  }
  useEffect(()=>{
    if(accessToken){
      console.log('user has logged in before')
      checkValidity()
    }  
    else {
      console.log('user has not logged in previously')
    }  
  },[])


  const login = (accessToken: string) => {
    setIsAuthenticated(true);
    window.localStorage.setItem('accessToken',accessToken)
  };

  const logout = () => {
    setIsAuthenticated(false);
    window.localStorage.clear()
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
