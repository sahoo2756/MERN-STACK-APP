import { useContext, useEffect, useState } from "react";
import Navbar_DisplayVideo from "./Navbar.DisplayVideo.jsx";
import LoginUserContext from "../../Context/loginUserContext.js";
import { FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { BiCheck } from "react-icons/bi";
import ShowFullVideo from "./ShowFullVideo.jsx";
import fetchVideos_API from "../../backendFunction/FetchVideo.js";
import axios from "axios";

export default function FullPage_DisPlayYoutubeData() {
  const { loggedInUserData } = useContext(LoginUserContext);
  const [isShowFullvideo, setShowFullVideo] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [videoTitle, setVideoTitle] = useState("");

  function MovieCart({ thumbnails, title, channelName, time, videoId }) {
    function handleThumbnailclick(videoId, title) {
      setShowFullVideo(true);
      setVideoId(videoId);
      setVideoTitle(title);
    }

    return (
      <div
        className="w-full flex flex-col gap-y-3 lg:w-[30%] h-[450px] shadow-2xl shadow-white/20
       px-1 rounded-md py-5"
      >
        <div className="w-full h-[70%]">
          <img
            src={thumbnails}
            // src="https://images.pexels.com/photos/3238529/pexels-photo-3238529.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="image not found"
            className="relative rounded-lg h-full w-full"
            onClick={() => handleThumbnailclick(videoId, title)}
          ></img>
        </div>

        <div className="px-2 flex flex-col gap-y-1 h-[30%]">
          <p className="text-gray-300 text-xs">{title}</p>
          <p className="flex items-center text-xs gap-x-2">
            {channelName}{" "}
            <span className="bg-gray-300 text-black rounded-full">
              <BiCheck />{" "}
            </span>
          </p>
          <p className="text-xs">{time}</p>
        </div>
      </div>
    );
  }

  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userQuery = new URLSearchParams(location.search).get("q");
    console.log("UserQuery => ", userQuery);
    if (userQuery === null || userQuery === undefined || userQuery === "") {
      alert("Query Is Null");
    } else {
      fetchVideos_API({ videoName: userQuery, setVideos });
    }
  }, []);

  const navigateToHomePage = () => {
    navigate("/");
  };

  const title =
    "bahubali the begging full video in hindi . Watch this moviw then you will get full enjoyable moment";

  return (
    <>
      <div className="bg-black text-white w-full min-h-[750px] h-fit flex flex-col items-center gap-y-8 py-20 lg:py-10 ">
        <div
          onClick={navigateToHomePage}
          className="text-3xl absolute right-10 top-2 hover:bg-green-600 px-3 py-2 rounded-md"
        >
          <FaHome />
        </div>
        <Navbar_DisplayVideo
          setVideos={setVideos}
          setShowFullVideo={setShowFullVideo}
        />



        {/* <ShowFullVideo />  */}

        {isShowFullvideo ? (
          <ShowFullVideo
            videoId={videoId}
            videoTitle={videoTitle}
            videos={videos}
          />
        ) : (
          <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 lg:gap-10 lg:px-10">
            {videos.map((obj) => {
              // return <MovieCart key={Math.random()} videoURL={url} />;
              return (
                <MovieCart
                  key={Math.random()}
                  thumbnails={obj.thumbnails}
                  title={obj.title}
                  channelName={obj.channelName}
                  time={obj.time}
                  videoId={obj.videoId}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
