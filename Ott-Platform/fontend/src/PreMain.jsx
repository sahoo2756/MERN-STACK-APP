import { useState } from "react";
import LoginUserContext from "./Context/loginUserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import LoginPage from "./Components/Login/Login";
import SignUpPage from "./Components/SignUp/SignUp";
import CreatorPage from "./Components/Creator/CreatorPage";
import FullPage_DisPlayYoutubeData from "./Components/DisplayVideo/FullPage.DisplayVideo";
import FooterContext from "./Context/FooterContext";
import {FooterInfo} from "./Components/Footer/FooterInfo"

export default function PreMain() {
  const [isSystemLoggenIn, setSystemLoggedIn] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState({});
  const [footerContextDetails, setFooterContextDetails] = useState({});

  let obj = {
    isSystemLoggenIn,
    setSystemLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  };

  return (
    <Router>
      <FooterContext.Provider
        value={{ footerContextDetails, setFooterContextDetails }}
      >
        <LoginUserContext.Provider value={{ ...obj }}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/creatorpage" element={<CreatorPage />}/>
            <Route
              path="/play-videos"
              element={<FullPage_DisPlayYoutubeData />}
            />
             <Route path="/footerInfo" element={<FooterInfo />} />

            <Route path="*" element={<h1>404 No Such Page Found</h1>} />
          </Routes>
        </LoginUserContext.Provider>
      </FooterContext.Provider>
    </Router>
  );
}
