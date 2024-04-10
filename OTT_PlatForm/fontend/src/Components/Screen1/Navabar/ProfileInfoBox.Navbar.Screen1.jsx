import profileImg from "../../../assets/Profile.jpeg";
import { useContext, useEffect, useRef, useState } from "react";
import { navbarProfileBoxContext_Screen1 , SystemLoggedInContext } from "../FileContainer.Screen1";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

export default function ProfileInfoBox({loginUserFirstLetter , handleLogOut}) {
  const { isProfileInfoBoxShow, setIsProfileInfo_BoxShow } = useContext(
    navbarProfileBoxContext_Screen1
  );
  const [userName , setUserName] = useState("")
  const {
    isSystemLoggenIn,
    loggedInUserData,
  } = useContext(SystemLoggedInContext);

  useEffect(()=>{
    // console.log('hello')
    // console.log(isSystemLoggenIn)
     if(isSystemLoggenIn) {
      let name = loggedInUserData.name;
      if(name) {
        setUserName(name)
      }
     }
  } , [loggedInUserData])

  const profileInfoMainContainerRef = useRef();

  useEffect(() => {
    profileInfoMainContainerRef.current.className += " hidden ";
  }, []);

  useEffect(() => {
    if (isProfileInfoBoxShow === true) {
      gsap.to(profileInfoMainContainerRef.current, {
        x: 0,
        opacity: 1,
        delay: 0.1,
        duration: 1.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(profileInfoMainContainerRef.current, {
        x: 500,
        delay: 0.1,
        opacity: 0,
        duration: 1.5,
      });
    }
  }, [isProfileInfoBoxShow]);
// The above useEffect() for animation



  return (
    <div
      ref={profileInfoMainContainerRef}
      className={`w-[25%] z-10 h-[80%] fixed bg-green-600 top-[8%] right-[5%] rounded-md ${
        isProfileInfoBoxShow ? "visible" : ""
      } `}
    >
      <button
         onClick={() => setIsProfileInfo_BoxShow(prev => !prev)}
      className="fixed text top-[10px] right-[20px] border-2  px-1 py-0 my-0 hover:border-transparent hover:bg-red-700">X</button>


      <div className=" pt-10 px-5  border-b-[1px] pb-5">
        <span className="bg-purple-600 px-2 py-1 rounded-full">{loginUserFirstLetter}</span>
          <span className="font-bold text-lg ml-2">{userName.replace(/\s/g, '#')}</span>
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
