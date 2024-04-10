import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchVideos_API } from "../FileContainer.DisplayYoutubeData";

export default function Navbar_DisplayYoutubeData({setVideos}) {

    const inputRef = useRef();

  

    const formHandler = (e) => {
        e.preventDefault();
        let userQuery = inputRef.current.value;

        if (userQuery === null || userQuery === undefined || userQuery === "") {
          alert("Query Is Null");
        } else {
          fetchVideos_API({query : userQuery ,  setVideos });
        }
    }

    return (
        <form onSubmit={formHandler} className="flex border h-fit w-[50%] " >
        <input
          type="text"
          ref={inputRef}
          className="w-full outline-none  bg-transparent  border-white/30   px-2 py-1 text-sm font-mono tracking-wide rounded-md"
          placeholder="Search"
          spellCheck={false}
        />
        <button onClick={formHandler} className="border border-l-0 bg-white/50 px-2">
          <FaSearch className="" />
        </button>
      </form>
    )
}