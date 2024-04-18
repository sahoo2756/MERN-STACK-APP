import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import ProfileInfoBox from "./profileInfoBox";
import handleLogOut from "../../Utility/handleLogOut.js";
import LoginUserContext from "../../Context/loginUserContext.js";

export default function DynamicNavbar({loginuserFirstNameLetter}) {
    const [willProfileInfoShow, setProfileInfoShow] = useState(false);
    const {
      isSystemLoggenIn,
      setSystemLoggedIn,
      loggedInUserData,
      setLoggedInUserData,
    } = useContext(LoginUserContext);

    const btnCss = `text-white bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition duration-300 focus:outline-none`;

  return (
    <>
      <NavLink to="/login">
        <button className={`${btnCss} w-full lg:w-fit`}>Switch Account</button>
      </NavLink>

      <button className={`${btnCss}`}>
        <FaCartArrowDown className="inline mr-1" /> Cart
      </button>

      <button className={`${btnCss}`}>
        <BsClockHistory className="inline mr-1" /> Watch List
      </button>

      <button onClick={()=> handleLogOut({setSystemLoggedIn , setLoggedInUserData})} className={`${btnCss}`}>Log-out</button>

      <ProfileInfoBox
        willProfileInfoShow={willProfileInfoShow}
        setProfileInfoShow={setProfileInfoShow}
      />

      <button
        onClick={() => setProfileInfoShow(!willProfileInfoShow)}
        className="w-fit m-auto text-white bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-2 rounded-full lg:hover:bg-gradient-to-r lg:hover:from-blue-400 lg:hover:to-purple-400 transition duration-300 focus:outline-none"
      >
        {loginuserFirstNameLetter}
      </button>
    </>
  );
}
