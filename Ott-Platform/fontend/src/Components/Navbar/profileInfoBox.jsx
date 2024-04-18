import { useContext, useEffect, useRef, useState } from "react";
import LoginUserContext from "../../Context/loginUserContext";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProfileInfoBox({ willProfileInfoShow, setProfileInfoShow }) {
  const { isSystemLoggenIn, setSystemLoggedIn, loggedInUserData, setLoggedInUserData } = useContext(LoginUserContext);
  const [userName, setUserName] = useState("");
  const [loginuserFirstNameLetter, setLoginuserFirstNameLetter] = useState('');
  const profileInfoMainContainerRef = useRef();
  const [isAnimationInitialized, setAnimationInitialized] = useState(false);

  const handleLogOut = () => {
    Cookies.remove('uid');
    setSystemLoggedIn(false);
    setLoggedInUserData({ source: "ProfileInfoBox.jsx handleLogOut() at navbar folder" });
    window.location.reload();
  }

  useEffect(() => {
    if (isSystemLoggenIn) {
      let name = loggedInUserData.name;
      if (name) {
        setLoginuserFirstNameLetter(name[0].toUpperCase());
        setUserName(name);
      } else {
        console.log('name is invalid ');
      }
    }
  }, [loggedInUserData])

  useEffect(() => {
    setAnimationInitialized(true);
  }, []);

  useEffect(() => {
    if (isAnimationInitialized && willProfileInfoShow) {
      const animationTarget = profileInfoMainContainerRef.current;
      gsap.to(animationTarget, {
        x: 0,
        opacity: 1,
        delay: 0.1,
        duration: 1.5,
        ease: "easeInOut",
      });
    }
  }, [willProfileInfoShow, isAnimationInitialized]);

  useEffect(() => {
    if (willProfileInfoShow === false) {
      const animationTarget = profileInfoMainContainerRef.current;
      gsap.to(animationTarget, {
        x: 500,
        delay: 0.1,
        opacity: 0,
        duration: 1.5,
        ease: "easeInOut"
      });
    }
  }, [willProfileInfoShow]);

  return (
    <div
      ref={profileInfoMainContainerRef}
      className={`w-full lg:w-[25%] z-10 h-[80%] fixed top-[8%] right-0 lg:right-[5%] rounded-md ${willProfileInfoShow ? "visible" : "hidden"
        } bg-black text-white`}
    >
      <div className="bg-white rounded-lg p-4">
        <button
          onClick={() => setProfileInfoShow(prev => !prev)}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          X
        </button>

        <div className="pt-8 pb-4 border-b-[1px]">
          <span className="bg-purple-600 px-3 py-1 rounded-full">{loginuserFirstNameLetter}</span>
          <span className="pl-3 text-lg font-semibold">{userName}</span>
        </div>

        <div className="pt-4 space-y-4">
          <NavLink
            to="/login"
            className="w-full inline-block text-center border border-gray-300 px-4 py-2 rounded-lg bg-black hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white"
          >
            Switch Account
          </NavLink>

          <button
            onClick={handleLogOut}
            className="w-full inline-block bg-black text-white border border-gray-500 px-4 py-2 rounded-lg hover:bg-gradient-to-r from-purple-500 to-blue-500"
          >
            Log-Out
          </button>

          <NavLink
            to="/watchHistory"
            className="w-full inline-block text-center border border-gray-300 px-4 py-2 rounded-lg bg-black hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white"
          >
            View Your History
          </NavLink>

        </div>
      </div>
    </div>
  );
}
