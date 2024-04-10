import React, { useState } from "react";
import App from "./App.jsx";
import {
  LoginPage_Auth,
  SignUpPage_Auth,
  FullPage_DisPlayYoutubeData,
  Documentation_FullPage,
  FullPage_ViewWatchHistory
} from "./Components/FileContainer.Components.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function PreMain() {

    const [isSystemLoggenIn, setSystemLoggedIn] = useState(false);
    const [loggedInUserData, setLoggedInUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<h2>No page found</h2>} />
        <Route path="/" element={<App prop={{isSystemLoggenIn, setSystemLoggedIn , loggedInUserData, setLoggedInUserData}} />} />
        <Route path="/login" element={<LoginPage_Auth prop={{isSystemLoggenIn, setSystemLoggedIn , loggedInUserData, setLoggedInUserData}} />} />
        <Route path="/sign-up" element={<SignUpPage_Auth prop={{isSystemLoggenIn, setSystemLoggedIn , loggedInUserData, setLoggedInUserData}} />} />
        <Route
          path="/ShowYoutubePage"
          element={<FullPage_DisPlayYoutubeData loggedInUserData={loggedInUserData}/>}
        />
        <Route path="/watchHistory" element={<FullPage_ViewWatchHistory loggedInUserData={loggedInUserData}/>} />
        <Route path="/docs" element={<Documentation_FullPage />} />
      </Routes>
    </Router>
  );
}
