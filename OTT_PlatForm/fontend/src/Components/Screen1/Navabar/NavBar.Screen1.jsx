import React, { useEffect, useRef, useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import {
  navbarProfileBoxContext_Screen1,
  ProfileInfoBox,
  navbarSearchBoxContext_Screen1,
  LoginUserContext,
} from "../FileContainer.Screen1.js";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"


export default function NavBar_Screen1() {
  const [isProfileInfoBoxShow, setIsProfileInfo_BoxShow] = useState(false);
  const [loginUserFirstLetter , setLoginUserFirstLetter] = useState("")
  const navigate = useNavigate();
  const inputRef = useRef();
  const {
    isSystemLoggenIn,
    setSystemLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  } = useContext(LoginUserContext);

  useEffect(() => {
    if(isSystemLoggenIn) {
      const ch = loggedInUserData.name[0].toUpperCase();
      setLoginUserFirstLetter(ch)
    }
  } , [loggedInUserData])
  


  const btnCSS = `bg-white/30 text-white text-md pb-1 px-1.5 rounded-md`;

  const formHandler = (e) => {
    e.preventDefault();
    let userQuery = inputRef.current.value;
    if (userQuery === " " || userQuery === "") {
      alert("Please Enter A Valid Query");
    } else {
      navigate(`/showYoutubePage?q=${userQuery}`);
    }
  };

  const handleLogOut = () => {
    // sessionStorage.removeItem("loggedUserData");
    sessionStorage.clear()
    Cookies.remove('uid');
    setSystemLoggedIn(false);
    setLoggedInUserData({source : "Navbar.Screen1.jsx handleLogOut()"})
    window.location.reload();
  }


  return (
    <div className="w-full flex justify-between items-center pl-10 pr-5 py-2 fixed top-0  z-10 bg-black/70 text-white">
      <navbarProfileBoxContext_Screen1.Provider
        value={{ isProfileInfoBoxShow, setIsProfileInfo_BoxShow }}
      >
        <ProfileInfoBox handleLogOut={handleLogOut} loginUserFirstLetter={loginUserFirstLetter} />
      </navbarProfileBoxContext_Screen1.Provider>

      <div className="w-[20%] h-[35px]">
        {/* Logo Div */}
        <img src="#" alt="Logo" className="w-[50%] bg-green-700" />
      </div>

      <form className="flex border w-[40%]" onSubmit={formHandler}>
        {/* Right Side Div */}
        <input
          type="text"
          className="w-full outline-none  bg-transparent  border-white/30   px-2 py-1 text-sm font-mono tracking-wide rounded-md"
          placeholder="Search Video"
          spellCheck={false}
          ref={inputRef}
        />

        <button className="border border-l-0 bg-white/50 px-2">
          <FaSearch className="" />
        </button>
      </form>

      <div className="flex items-center gap-4">
        {/* Search Box Div */}

        {isSystemLoggenIn ? (
         <>
           <button onClick={handleLogOut} className={`${btnCSS}`}>Log-Out</button>
          <button
              onClick={() => setIsProfileInfo_BoxShow((prev) => !prev)}
              className="text-xl px-2 rounded-full py-1 m-0 hover:bg-white/30 bg-sky-600 "
          >{loginUserFirstLetter}</button>
         </>
        ) : (
          <>
            <NavLink to="/login" className={`${btnCSS}`}>
              Login
            </NavLink>
            <NavLink to="sign-up" className={`${btnCSS}`}>
              Sign-Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}


