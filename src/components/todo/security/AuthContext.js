import { createContext, useContext, useState } from 'react';
import { executeBasicAuthenticationService } from '../api/HelloWorldApiService';

// 1. Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components

export default function AuthProvider ({ children }) {

    // 3. Put some state in the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);
   
    async function login(username, password){

        const baToken = 'Basic ' + window.btoa(username + ":" + password);

        try {

            const response = await executeBasicAuthenticationService(baToken)           
            
            setIsAuthenticated(false);
    
            if(response.status==200){
                setIsAuthenticated(true);
                setUsername(username);
                setToken(baToken);
                return true;
            } else {
                logout();
                return false;
            }
        } catch(error){
            logout();
            return false;
        }
      
    }

    function logout(){
        setIsAuthenticated(false);
        setUsername(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )

}