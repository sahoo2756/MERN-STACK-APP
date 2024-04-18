import { useState, useContext, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import LoginUserContext from "../../Context/loginUserContext";
import ProfileInfoBox from "./profileInfoBox";
import DynamicNavbar from "./DynamicNavbar";
import StaticNavbar from "./StaticNavbar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [willProfileInfoShow, setProfileInfoShow] = useState(false);
  const { isSystemLoggenIn, loggedInUserData } = useContext(LoginUserContext);

  const [loginuserFirstNameLetter, setLoginuserFirstNameLetter] = useState("");

  useEffect(() => {
    if (isSystemLoggenIn) {
      let name = loggedInUserData.name;
      if (name) {
        setLoginuserFirstNameLetter(name[0].toUpperCase());
      } else {
        console.log("name is invalid ");
      }
    }
  }, [loggedInUserData]);

  function formHandler(e) {
    e.preventDefault();
    // Your form handling logic
  }

  function handleLogoClick() {
    // Redirect to home page or refresh the current page
    window.location.href = "/";
  }

  const btnCss = `text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none`;

  const mobileBtnCss = `w-full text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none`;

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden bg-gray-900 text-right py-2 px-3">
        <div className="bg-gray-900 rounded-full">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}

      <div>
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:hidden top-0 left-0 w-[80%] h-full bg-gray-900 z-50 pt-16 transition-transform ease-in-out duration-[800ms]`}
        >
          <div className="flex flex-col gap-y-5 items-center">
            <img src={logo} alt="" className="w-36 mb-6" />

            <div className="text-white w-full px-8 flex flex-col-reverse gap-y-5">
              {isSystemLoggenIn ? (
                <DynamicNavbar
                  loginuserFirstNameLetter={loginuserFirstNameLetter}
                />
              ) : (
                <StaticNavbar />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar for Large Screens */}
      <div className="hidden lg:fixed lg:top-0 lg:left-0 lg:z-10 lg:w-full lg:bg-gray-900 lg:text-white lg:shadow-2xl lg:flex lg:justify-between lg:items-center lg:px-3 lg:py-2">
        <div className="text-white">
          <img
            src={logo}
            alt="Hover Logo"
            className="w-36 cursor-pointer transition duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-lg"
            onClick={handleLogoClick}
          />
        </div>

        <div id="right-side-contect" className="flex gap-x-5 items-center ">
          {isSystemLoggenIn ? (
            <DynamicNavbar
              loginuserFirstNameLetter={loginuserFirstNameLetter}
            />
          ) : (
            <StaticNavbar />
          )}
        </div>
      </div>
    </>
  );
}
