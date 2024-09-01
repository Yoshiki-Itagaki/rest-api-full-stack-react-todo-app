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
   
    function login(username, password){

        const baToken = 'Basic ' + window.btoa(username + ":" + password);

        executeBasicAuthenticationService(baToken)
            .then (response => console.log(response))
            .catch (error => console.log(error))
        
        setIsAuthenticated(false);

        if(username === 'in28minutes' && password === 'dummy' ){
            setIsAuthenticated(true);
            setUsername(username);
            return true;
        } else {
            setIsAuthenticated(false);
            setUsername(null);
            return false;
        }
    }

    function logout(){
        setIsAuthenticated(false);
        setUsername(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>
    )

}