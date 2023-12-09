import React, { useState } from "react";

export type IAUthContext = {
    userId: string,
    setUserId: (userId: string) => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void;
}
const AuthContext = React.createContext<IAUthContext | null> (null)

const AuthProvider = (props:any) => {
    const [userId, setUserId] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{userId, setUserId, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider};