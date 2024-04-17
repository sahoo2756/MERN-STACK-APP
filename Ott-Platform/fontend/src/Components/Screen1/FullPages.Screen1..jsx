import {  useRef, useState } from "react";
import watchingMovieWithEatingPuf from "./Watching_Movie_With_Pufcorn.jpg";
import { FaSearch } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./searchBoxAnimation.css";
import { NavLink , useNavigate } from "react-router-dom";

export default function FullPage_Screen1() {
  const [isInputFeildVisible, setInputFeildVisible] = useState(false);
  const inputRef = useRef()
  const navigate = useNavigate();

  function handleFormSubmit(e){
    e.preventDefault();
    if(!inputRef.current.value) {
      alert("Enter Query Please");
      return
    }
    navigate(`/play-videos?q=${inputRef.current.value}`)
  }

  return (
    <div className="bg-black text-white w-full lg:h-fit lg:pt-24 pb-8 lg:pb-10">
      {/* Container of both images and text */}
      <div className="flex flex-col-reverse z-20 lg:flex-row w-full h-full">
        <div className="relative flex flex-col gap-y-3 lg:w-[70%] pt-5 px-3 lg:pl-24 lg:pt-10 lg:gap-y-6 font-sans">
          <div className="text-4xl lg:text-5xl tracking-wider font-bold leading-tight">
            <p>
              StreamHub: Your Ultimate Video Destination
              <ReactTyped
                strings={["Streaming", "Watching"]}
                typeSpeed={100}
                backSpeed={100}
                loop
                className="hover:bg-none"
              >
                <input
                  type="text"
                  readOnly
                  className="bg-transparent border-none outline-none"
                />
              </ReactTyped>
            </p>
          </div>
          <div className="text-gray-300 flex flex-col lg:flex-row gap-y-1 text-base">
            <p>
              Dive into a vast library of the latest and greatest videos.
              Immerse yourself in captivating stories, engaging documentaries,
              and trending content with just a click.
            </p>
          </div>
          <div className="w-full lg:w-fit flex flex-col lg:flex-row gap-y-3 lg:gap-x-5">
            <button className="bg-white py-3 px-6 lg:hover:scale-[1.02] text-black rounded-md hover:bg-gray-200 transition-transform transform hover:scale-105">
              Start Streaming
            </button>
            <NavLink to="/signUp" className="border-[2.5px] border-white py-3 px-6 lg:hover:scale-[1.02] rounded-md hover:bg-white hover:text-black transition-transform transform hover:scale-105">
              Sign Up
            </NavLink>
          </div>

          <form onSubmit={handleFormSubmit} className="w-full lg:w-fit mt-3  h-fit  flex flex-col lg:flex-row gap-y-3  lg:gap-x-3 items-center overflow-hidden cursor-pointer shadow-md ">
            <FaSearch
              onClick={() => {
                setInputFeildVisible((prev) => !prev);
              }}
              className="text-white  text-2xl cursor-pointer inline"
            />
            {isInputFeildVisible ? (
              <>
              <input
                placeholder="Search.."
                id="input"
                spellCheck={false}
                ref={inputRef}
                className=" w-full lg:w-72 border-none outline-none caret-orange-500 bg-white pl-2 text-gray-700 rounded-xl text-lg py-1 font-sans tracking-wide inline"
                style={{ animation: "slide-in 1s ease-out forwards" }}
              />
              <button className="lg:hidden border px-3 py-1 rounded-md">Search</button>
              </>
            ) : (
              <input
                placeholder="Search.."
                id="input"
                spellCheck={false}
                className="w-full lg:w-72 border-none outline-none caret-orange-500 bg-white pl-2 text-gray-700 rounded-xl text-lg py-1 font-sans tracking-wide inline"
                style={{ animation: "slide-out 1s ease-out forwards" }}
              />
            )}
          </form>
        </div>
        {/* First left side box end ]above] */}

        <div className="relative h-[60%] lg:h-full py-2">
          <img
            className="rounded-md w-full object-cover h-[500px]"
            src={watchingMovieWithEatingPuf}
            alt="Watching Movie"
          />
        </div>
      </div>
    </div>
  );
}
