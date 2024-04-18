import { useContext, useEffect, useRef, useState } from "react";
import LoginUserContext from "../../Context/loginUserContext";
import gsap from "gsap";
import { NavLink } from "react-router-dom";
import handleLogOut from "../../Utility/handleLogOut";

export default function ProfileInfoBox({
  willProfileInfoShow,
  setProfileInfoShow,
}) {
  const {
    isSystemLoggenIn,
    setSystemLoggedIn,
    loggedInUserData,
    setLoggedInUserData,
  } = useContext(LoginUserContext);
  const [userName, setUserName] = useState("");
  const [loginuserFirstNameLetter, setLoginuserFirstNameLetter] = useState("");
  const profileInfoMainContainerRef = useRef();

  useEffect(() => {
    if (isSystemLoggenIn) {
      let name = loggedInUserData.name;
      if (name) {
        setLoginuserFirstNameLetter(name[0].toUpperCase());
        setUserName(name);
      } else {
        console.log("name is invalid ");
      }
    }
  }, [loggedInUserData]);

  useEffect(() => {
    profileInfoMainContainerRef.current.className = " hidden ";
  }, []);

  useEffect(() => {
    const animationTarget = profileInfoMainContainerRef.current;
    if (willProfileInfoShow === true) {
      gsap.to(animationTarget, {
        x: 0, 
        opacity: 1,
        delay: 0.1,
        duration: 1.5,
        ease: "easeInOut",
      });
    } else {
      gsap.to(animationTarget, {
        x: 500,
        delay: 0.1,
        opacity: 0,
        duration: 0.5,
        ease: "easeInOut",
      });
    }
  }, [willProfileInfoShow]);


  return (
    <div
      ref={profileInfoMainContainerRef}
      className={`w-full lg:w-[25%] z-10 h-fit fixed top-[10%] right-0 lg:right-[5%] rounded-md ${
        willProfileInfoShow && "visible"
      } bg-black text-white`}
    >
      <div className="bg-white rounded-lg p-4">
        <button
          onClick={() => setProfileInfoShow((prev) => !prev)}
          className="absolute top-2 right-5 text-white bg-red-500 hover:bg-red-600 px-2"
        >
          X
        </button>

        <div className="pt-8 pb-4 border-b-[1px]">
          <span className="bg-purple-600 px-3 py-1 rounded-full">
            {loginuserFirstNameLetter}
          </span>
          <span className="pl-3 text-black text-lg font-semibold">
            {userName}
          </span>
        </div>

        <div className="pt-4 space-y-4">
          <NavLink
            to="/login"
            className="w-full inline-block text-center border border-gray-300 px-4 py-2 rounded-lg bg-black hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white"
          >
            Switch Account
          </NavLink>

          <button
            onClick={()=> handleLogOut({setSystemLoggedIn , setLoggedInUserData})}
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
