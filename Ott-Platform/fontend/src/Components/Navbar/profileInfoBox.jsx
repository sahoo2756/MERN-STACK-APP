import { useContext, useEffect, useRef, useState } from "react";
import LoginUserContext from "../../Context/loginUserContext";
import gsap from "gsap";
import { NavLink  } from "react-router-dom";
import Cookies from "js-cookie"

export default function ProfileInfoBox({willProfileInfoShow , setProfileInfoShow }) {
  // console.log("isOpen => ",isOpen)

  const { isSystemLoggenIn, setSystemLoggedIn , loggedInUserData , setLoggedInUserData } = useContext(LoginUserContext);
  const [userName , setUserName] = useState("");
  const [loginuserFirstNameLetter , setLoginuserFirstNameLetter] = useState('')
  const profileInfoMainContainerRef = useRef();
 
  // console.log("isProfileInfoBox => " , isProfileInfoBoxShow)
 

  const handleLogOut = () => {
    Cookies.remove('uid');
    setSystemLoggedIn(false);
    setLoggedInUserData({source : "ProfileInfoBox.jsx handleLogOut() at navbar folder"})
    window.location.reload();
  }

  useEffect(()=>{
     if(isSystemLoggenIn) {
      let name = loggedInUserData.name;
      if(name) {
        setLoginuserFirstNameLetter(name[0].toUpperCase())
        setUserName(name);
      } else {
        console.log('name is invalid ')
      }
     }
  } , [loggedInUserData])


  useEffect(() => {
    profileInfoMainContainerRef.current.className += " hidden ";
  }, []);

  useEffect(() => {
    if (willProfileInfoShow === true) {
      gsap.to(profileInfoMainContainerRef.current, {
        x : 0 ,
        opacity: 1,
        delay: 0.1,
        duration: 1.5,
        ease: "easeInOut",
      });
    } else {
      gsap.to(profileInfoMainContainerRef.current, {
        x: 500,
        delay: 0.1,
        opacity: 0,
        duration: 1.5,
        ease : "easeInOut"
      });
    }
  }, [willProfileInfoShow]);

  
// The above useEffect() for animation



  return (
    <div
      ref={profileInfoMainContainerRef}
      className={`w-full lg:w-[25%] z-10 h-[80%] fixed bg-green-600 top-[8%] right-0 lg:right-[5%] rounded-md ${
        willProfileInfoShow && "visible" 
      } `}
    >
      <button
         onClick={() => setProfileInfoShow(prev => !prev)}
      className="fixed text top-[10px] right-[20px] border-2  px-1 py-0 my-0 hover:border-transparent hover:bg-red-700">X</button>


      <div className=" pt-10 px-5  border-b-[1px] pb-5">
        <span className="bg-purple-600 px-3 py-1 rounded-full">{loginuserFirstNameLetter}</span>
         <span className="px-5">{userName}</span>
          {/* <p>View Your History</p> */}
      </div>

      <div className="pt-5 grid justify-center gap-3">
        <NavLink to="/login" className="w-[100%] text-center border px-2 py-[0.5px] hover:scale-105">
          Switch Account
        </NavLink>
        <NavLink onClick={handleLogOut} className="w-[100%] text-center border px-2 py-[0.5px] hover:scale-105">
          Log-Out
        </NavLink>
        <NavLink to="/watchHistory" className="w-[100%] border px-2 py-[0.5px] hover:scale-105">
        View Your History
        </NavLink>
        
      </div>
    </div>
  );
}
