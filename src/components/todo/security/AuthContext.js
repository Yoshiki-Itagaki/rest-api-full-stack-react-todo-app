import { createContext, useContext, useState } from 'react';

// 1. Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// 2. Share the created context with other components

export default function AuthProvider ({ children }) {

    // 3. Put some state in the context
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(username, password){
        if(username === 'in28minutes' && password === 'dummy' ){
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }
    }

    function logout(){
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}