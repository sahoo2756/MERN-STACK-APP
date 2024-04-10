import { useState, useEffect } from "react";
import {fetchYoutubeVideos} from "../FileContainer.Screen2.js"

export default function FullPage_Screen2() {
  const [videos, setVideos] = useState([]);
  const [youtubeFullResponse , setYoutubeFullResponse] = useState({})
  const [hetroGeneousVideo , setHetrogeneousVideo] = useState([])

  useEffect(() => {
    try {
      (async () => {
        let res = await fetchYoutubeVideos({ query: "KGF" , maxResults : 1 , SendHetroGeneousVideo : false });
        console.log('res ', res)
        setVideos(res);
        // console.log(res)
        // setYoutubeFullResponse(res)
      })();
    } catch (error) {
      console.log("Error at =>  ", error.message);
    }
  }, []);

  return (
    <div className="w-full h-fit bg-black">
      {/* {console.log("This is data => ", youtubeFullResponse)} */}
      <div className="flex flex-wrap justify-evenly gap-y-5  p-2">
        {videos
          ? videos.map((index) => {
              let videoId = index.id.videoId;
              let url = `https://www.youtube.com/embed/${videoId}`;
              return (
                <iframe
                  className="border px-2 py-3 rounded-md w-[27%] h-[150px]"
                  allowFullScreen
                  key={Math.random()}
                  src={url}
                ></iframe>
              );
            })
          : ""}
      </div>
    </div>
  );
}
