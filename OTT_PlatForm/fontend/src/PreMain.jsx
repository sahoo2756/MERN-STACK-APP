import React, { useState } from "react";
import App from "./App.jsx";
import {
  LoginPage_Auth,
  SignUpPage_Auth,
  FullPage_DisPlayYoutubeData,
  Documentation_FullPage,
  FullPage_ViewWatchHistory,
  LoginUserContext
} from "./Components/FileContainer.Components.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginUserContextProvider } from "./Components/Context/LoginUserContext.jsx";

export default function PreMain() {

  const [loggedInUserData, setLoggedInUserData] = useState(() => {
    let storedValue = sessionStorage.getItem("loggedUserData");
    let jsonData = JSON.parse(storedValue);

    return (jsonData) ? jsonData : null
  });
  const [isSystemLoggenIn, setSystemLoggedIn] = useState(() => {
    return Boolean(loggedInUserData);
  });

  console.log(loggedInUserData , "loggedUserData")
  console.log(isSystemLoggenIn , "isStemLoggedIn")
  return (
    <Router>
      <LoginUserContext.Provider value={{isSystemLoggenIn, setSystemLoggedIn , loggedInUserData, setLoggedInUserData}}>
      <Routes>
        <Route path="*" element={<h2>No page found</h2>} />
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage_Auth />} />
        <Route path="/sign-up" element={<SignUpPage_Auth />} />
        <Route
          path="/ShowYoutubePage"
          element={<FullPage_DisPlayYoutubeData />}
        />
        <Route path="/watchHistory" element={<FullPage_ViewWatchHistory />} />
        <Route path="/docs" element={<Documentation_FullPage />} />
      </Routes>
      </LoginUserContext.Provider>
    </Router>
  );
}
