import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { gsap } from "gsap";
import profileImg from "../../../assets/Profile.jpeg";

import {
  navbarProfileBoxContext_Screen1,
  ProfileInfoBox,

  navbarSearchBoxContext_Screen1,
  Navbar_SearchBox_Screen1
} from "../FileContainer.Screen1.js";

export default function NavBar_Screen1() {
  const [isSearchBoxShow, setIsSearchBoxShow] = useState(false);
  const [isProfileInfoBoxShow, setIsProfileInfo_BoxShow] = useState(false);

 
  return (
    <div className="w-full flex flex-col gap-y-3  px-3 pt-2 z-0">
      <navbarProfileBoxContext_Screen1.Provider
        value={{ isProfileInfoBoxShow, setIsProfileInfo_BoxShow }}
      >
        <ProfileInfoBox />
      </navbarProfileBoxContext_Screen1.Provider>

      {/* profile box  1st main container */}

      <div className="w-full flex justify-between  items-center">
        <p>Logo</p>
        <div className="flex gap-10 items-center">
          <button className="relative pb-1 group">
            <span>Premium-Content</span>
            <span className="absolute w-[25%] h-[3px] bg-white transition-all duration-[1.5s] delay-75 ease-in-out bottom-0 left-0 group-hover:w-full"></span>
            {/* The above span tag is only for bottom animation scroll */}
          </button>
          <button className="relative pb-1 group">
            <span>Subscription</span>
            <span className="absolute bottom-0 left-0 w-[25%] h-[3px] bg-white transition-all ease-in-out delay-75 duration-1000 group-hover:w-full"></span>
            {/* The above span tag is only for bottom animation scroll */}
          </button>
          <button className="text-2xl" onClick={()=> setIsSearchBoxShow(prev => !prev)}>
            <IoSearch />
          </button>
          <button
            onClick={() => setIsProfileInfo_BoxShow((prev) => !prev)}
            className="rounded-full px-3 py-2 bg-green-700"
          >
            M
          </button>
        </div>
      </div>
      {/* The above div only for static docs in NAvabr */}
      
      <navbarSearchBoxContext_Screen1.Provider value={{isSearchBoxShow , setIsSearchBoxShow}}>
        <Navbar_SearchBox_Screen1 />
      </navbarSearchBoxContext_Screen1.Provider>

    </div>
  );
}
