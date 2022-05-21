import { createContext, useState, useContext} from "react";

const AuthContext = createContext(null);

export function AuthProvider ({ children }) {
    const [email, setEmail] = useState("");
    const [, setPassword] = useState("");

    function login(email, password) {
        setEmail(email);
        setPassword(password);
    }

    function logout(){
        setEmail("null");
    }
    return(
        <AuthContext.Provider value={{ email, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}