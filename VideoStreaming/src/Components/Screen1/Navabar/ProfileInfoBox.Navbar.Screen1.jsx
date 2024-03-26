import profileImg from "../../../assets/Profile.jpeg";
import { useContext, useEffect, useRef } from "react";
import { navbarProfileBoxContext_Screen1 } from "../FileContainer.Screen1";
import gsap from "gsap";

export default function ProfileInfoBox() {
  const { isProfileInfoBoxShow, setIsProfileInfo_BoxShow } = useContext(
    navbarProfileBoxContext_Screen1
  );

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
      className="fixed text-2xl top-[10px] right-[20px] border-2  px-2 py-0 my-0 hover:border-transparent hover:bg-red-700">X</button>
      {/* {console.log('minati')} */}
      <div className="flex justify-center gap-5 pt-5 items-center border-b-[1px] pb-5">
        <img
          src={profileImg}
          alt="Profile-Image"
          className="w-[100px] h-[100px] rounded-full"
        />
        <div>
          <p>Manas</p>
          <p>View Your History</p>
        </div>
      </div>

      <div className="pt-5 grid justify-center gap-3">
        <button className="w-[100%] border px-2 py-[0.5px] hover:scale-105">
          Switch Account
        </button>
        <button className="w-[100%] border px-2 py-[0.5px] hover:scale-105">
          Sign Out
        </button>
        <button className="w-[100%] border px-2 py-[0.5px] hover:scale-105">
          Subscription
        </button>
        <button className="w-[100%] border px-2 py-[0.5px] hover:scale-105">
          Setting
        </button>
      </div>
    </div>
  );
}
