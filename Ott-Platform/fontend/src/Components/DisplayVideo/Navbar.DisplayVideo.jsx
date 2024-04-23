import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import fetchVideos_API from "../../backendFunction/FetchVideo";

export default function Navbar_DisplayVideo({setVideos , setShowFullVideo}) {

    const inputRef = useRef();

  

    const formHandler = (e) => {
        e.preventDefault();
        let userQuery = inputRef.current.value;

        if (userQuery === null || userQuery === undefined || userQuery === "") {
          alert("Query Is Null");
        } else {
          setShowFullVideo(false)
          fetchVideos_API({videoName : userQuery ,  setVideos });
        }
    }

    return (
        <form onSubmit={formHandler} className="flex  h-fit w-full lg:w-[50%] bg-white rounded-full px-2 drop-shadow-2xl text-black" >
        <input
          type="text"
          ref={inputRef}
          className="w-full outline-none  bg-transparent  border-white/30   px-2 py-1 text-lg font-sans tracking-wide rounded-md"
          placeholder="Search"
          spellCheck={false}
        />
        <button onClick={formHandler} className=" text-blue-900 px-2">
          <FaSearch className="" />
        </button>
      </form>
    )
}