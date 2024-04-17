import { useState } from "react";
import LoginUserContext from "./Context/loginUserContext";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import App from "./App";
import LoginPage from "./Components/Login/Login";
import SignUpPage from "./Components/SignUp/SignUp";
import FullPage_DisPlayYoutubeData from "./Components/DisplayVideo/FullPage.DisplayVideo";

export default function PreMain(){
    const [isSystemLoggenIn , setSystemLoggedIn] = useState(false)
    const [loggedInUserData , setLoggedInUserData] = useState({})
    let obj = {isSystemLoggenIn , setSystemLoggedIn , loggedInUserData , setLoggedInUserData}

    return (
        <Router>
            <LoginUserContext.Provider value={{...obj}}>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/signUp" element={<SignUpPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/play-videos" element={<FullPage_DisPlayYoutubeData />} />

                    
                    <Route path="*" element={<h1>404 No Such Page Found</h1>} />
                </Routes>
            </LoginUserContext.Provider>            
        </Router>
    )
}