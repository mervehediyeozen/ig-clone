import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userData"));
        if (data) {
            setUser(data);
            setLoggedIn(true);
        }
    }, []); // Boş array, sadece bileşen ilk defa render edildiğinde çalışacak

    const isLogged = (userData) => {
        setUser(userData);
        setLoggedIn(true);
        localStorage.setItem("userData", JSON.stringify(userData));
    };

    const values = { user, loggedIn, isLogged };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

export const useAuth = () => useContext(AuthContext);
