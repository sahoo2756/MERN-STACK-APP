import { useEffect, useRef, useState } from "react";
import {
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
} from "../../../assets/Movie_Banner/moviePoster";
import Nature1 from "../../../assets/Video/Nature1.mp4";
import Nature2 from "../../../assets/Video/Nature2.mp4";
import Nature3 from "../../../assets/Video/Nature3.mp4";

import { gsap } from "gsap";
import "./style.css"
import makeAnimateTheVideo from "./Animation.js";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function FullPage_Screen2() {
  const Rectanglur = () => {
    const RectnglurCart = ({ imageURL }) => {
      return (
        <div className="w-[15%] bg-white p-0.5 rounded-md h-[250px] border">
          <img src={imageURL} alt="" className="w-full h-full object-cover" />
        </div>
      );
    };
    return (
      <>
        <RectnglurCart imageURL={pic1} />
        <RectnglurCart imageURL={pic2} />
        <RectnglurCart imageURL={pic3} />
        <RectnglurCart imageURL={pic4} />
        <RectnglurCart imageURL={pic5} />
        <RectnglurCart imageURL={pic6} />
        <RectnglurCart imageURL={pic7} />
        <RectnglurCart imageURL={pic8} />
        <RectnglurCart imageURL={pic9} />
        <RectnglurCart imageURL={pic1} />
      </>
    );
  };

  const SquareMovieBanner = () => {
    const SquareCart = ({ imageURL }) => {
      return (
        <div className="w-[30%] h-[200px] bg-white p-0.5 rounded-md">
          <img
            src={imageURL}
            alt=""
            className="relative h-full w-full object-fill"
          />
        </div>
      );
    };
    return (
      <div className="flex flex-wrap justify-between gap-5 gap-y-10">
        <SquareCart imageURL={pic1} />
        <SquareCart imageURL={pic2} />
        <SquareCart imageURL={pic3} />
        <SquareCart imageURL={pic4} />
        <SquareCart imageURL={pic5} />
        <SquareCart imageURL={pic6} />
      </div>
    );
  };

  const VideoPlayComp = ({ className, url , t1 }) => {
    const videoRef = useRef(null);

    
    return (
      <div className={`w-full h-[400px] ${className} relative`}>
        <video
          ref={videoRef}
          src={url}
          loop
          autoPlay={true}
          muted
          className="w-full h-full object-fill rounded-md"
        ></video>
      </div>
    );
  };

  const [staggerTime , setStaggerTime] = useState(10)
  const [videoURL1 , setVideoURL1] = useState(Nature1 )
  const [videoURL2 , setVideoURL2] = useState(Nature2 )
  const [videoURL3 , setVideoURL3] = useState(Nature3 )
  const divRef = useRef()

  useEffect(()=>{
    makeAnimateTheVideo({staggerTime});
  },[])
  
  const handleStagger =  () => {
    console.log(divRef)
    setStaggerTime((prev) => (prev === 10) ? 0 : 10)
  }

  return (
    <div className="w-full h-fit bg-black py-10 px-10 relative">
      <div className="flex flex-wrap gap-10 justify-between">
        <Rectanglur />
      </div>

      <div ref={divRef} className="w-full h-fit min-h-[500px] border relative">

        <span onClick={handleStagger}> <MdOutlineKeyboardArrowLeft  className="text-white text-8xl bg-green-400 w-8 rounded-md hover:bg-green-300 absolute z-10 top-[50%] bottom-[50%] left-10 translate-y-[-50%] " /> </span>
        <span><MdOutlineKeyboardArrowRight  className="text-white text-8xl bg-green-400 w-8 rounded-md absolute z-10 top-[50%] bottom-[50%] right-10 translate-y-[-50%] "/></span>

        <div className="absolute w-full video-scroll-css z-0" >
          <VideoPlayComp className="mt-10" url={videoURL1}  />
        </div>
        <div className="absolute w-full video-scroll-css z-0">
          <VideoPlayComp className="mt-10" url={videoURL2}  />
        </div>
        <div className="absolute w-full video-scroll-css z-0">
          <VideoPlayComp className="mt-10" url={videoURL3} />
        </div>
      </div>

      <div className="w-full h-[500px] mt-10 text-white">
        <SquareMovieBanner />
      </div>
    </div>
  );
}
