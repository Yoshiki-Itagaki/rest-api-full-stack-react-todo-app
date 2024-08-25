import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Put some state in the context
// Share the created context with other components

export default function AuthProvider ({ children }) {

    const [number, setNumber] = useState(10);

    setInterval(() => 
        setNumber(number+1), 10000
    )

    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    )

}