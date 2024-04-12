import { createContext, useState } from "react";

const LoginUserContext = createContext();


function LoginUserContextProvider({children}) {
    const [isSystemLoggenIn, setSystemLoggedIn] = useState(false);
    const [loggedInUserData, setLoggedInUserData] = useState(null);
  console.log("Hello")
    return (
        <LoginUserContext.Provider value={{isSystemLoggenIn, setSystemLoggedIn ,loggedInUserData, setLoggedInUserData }}>
            {children}
        </LoginUserContext.Provider>
    )

}

export default LoginUserContext
export {LoginUserContextProvider}