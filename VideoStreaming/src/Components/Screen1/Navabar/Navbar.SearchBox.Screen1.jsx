import { useEffect , useRef , useContext } from "react";
import { navbarSearchBoxContext_Screen1 } from "../FileContainer.Screen1.js";
import gsap from "gsap";

export default function Navbar_SearchBox_Screen1() {
    const {isSearchBoxShow , setIsSearchBoxShow} = useContext(navbarSearchBoxContext_Screen1)
    const searchBoxRef = useRef();

  useEffect(() => {
    searchBoxRef.current.className += " hidden ";
  }, []);

  useEffect(() => {
    if (isSearchBoxShow === true) {
      gsap.to(searchBoxRef.current, {
        x: 0,
        opacity: 1,
        delay: 0.1,
        duration: 1.5,
      });
    } else {
      gsap.to(searchBoxRef.current, {
        x: 300,
        delay: 0.1,
        opacity: 0,
        duration: 1.5,
      });
    }
  }, [isSearchBoxShow]);

  return (
    <div
      className={`flex justify-end items-center w-full  ${
        isSearchBoxShow ? "visible" : ""
      }`}
      ref={searchBoxRef}
    >
      <input
        type="text"
        placeholder="Enter Movie Name"
        spellCheck="false"
        autoFocus={isSearchBoxShow}
        className="bg-transparent border-b-2 text-white outline-none p-1 font-mono placeholder:text-white"
      />
      <button
        className="rounded-t-sm rounded-r-sm hover:scale-[1.02] px-2  bg-red-700"
        aria-label="Search"
      >
        Search
      </button>
    </div>
  );
}
