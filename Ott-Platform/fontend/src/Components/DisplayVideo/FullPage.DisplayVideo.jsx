import { useContext, useEffect, useState } from "react";
import Navbar_DisplayVideo from "./Navbar.DisplayVideo.jsx";
import LoginUserContext from "../../Context/loginUserContext.js";
import { FaHome } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import fetchVideos_API from "../../backendFunction/FetchVideo.js";
import axios from "axios"; 


export default function FullPage_DisPlayYoutubeData() {
  const {loggedInUserData}  = useContext(LoginUserContext)


  function MovieCart({ thumbnails , title , time }) {
    const storeUserWatchHistory = ({ videoURL }) => {
      
        try {
          axios
            .post(
              "http://localhost:4000/api/storeWatchURL",
              { userData: { email: loggedInUserData.email, videoURL } },
              { withCredentials: true }
            )
            .then((res) => {
              console.log("storeWatchList response is ", res);
            })
            .catch((error) => {
              console.log(
                "Error at fullPageDisplayYouTubeData storeWatchList.js",
                error.message
              );
            });
        } catch (error) {
          console.log("error at storeUserWatchHistory = ", error.message);
        }
     
    };

    return (
      <div
        className="w-full flex flex-col lg:w-[30%] h-[400px] shadow-2xl shadow-white/50
       px-1 rounded-md"
      >
       
       <img
          src={thumbnails}
          alt="image not found"
          className="relative w-full"
        ></img>
      
        <p className="text-gray-300 text-sm">{title}</p>
        <p>{time}</p>
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
      fetchVideos_API({ videoName : userQuery, setVideos });
    }
    
  }, []);

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="bg-black text-white w-full min-h-[750px] h-fit flex flex-col items-center gap-y-20 py-20 lg:py-10 ">
      <div
        onClick={navigateToHomePage}
        className="text-3xl absolute right-10 top-2 hover:bg-green-600 px-3 py-2 rounded-md"
      >
        <FaHome />
      </div>
      <Navbar_DisplayVideo setVideos={setVideos} />

      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 lg:gap-10 lg:px-10">
        {videos.map((obj) => {
          // return <MovieCart key={Math.random()} videoURL={url} />;
          return <MovieCart key={Math.random()} thumbnails={obj.thumbnails} title={obj.title} time={obj.time} />;
        })}
      </div>
    </div>
  );
}
