import { BiCheck } from "react-icons/bi";

function Cart({thumbnails , title, time, channelName , videoId , handleThumbnailclick }) {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-x-5 h-32">
      <img
        className="relative rounded-lg lg:w-[60%] h-full object-cover"
        src={thumbnails}
        alt="image not found"
        onClick={() => handleThumbnailclick({videoId, title})}
      ></img>
      <div className="w-[40%] flex flex-col gap-y-1">
        <p className="text-gray-300 text-xs">{title}</p>
        <p className="flex items-center gap-x-2 text-xs">
          {channelName}{" "}
          <span className="bg-gray-300 text-black rounded-full text-xs">
            <BiCheck />{" "}
          </span>
        </p>
        <p className="text-xs">{time}</p>
      </div>
    </div>
  );
}

export default function ShowFullVideo({ videoId , videos , videoTitle , handleThumbnailclick}) {
  console.log(handleThumbnailclick)
  const noScrollbars = {
    scrollbarWidth: "none",
  };
  return (
    <div className="w-full h-96 flex flex-col lg:flex-row gap-x-3 px-5">
      <div className="relative w-full  lg:w-[60%] lg:h-full shadow-2xl shadow-white/20 flex flex-col">
        <iframe
        height='500'
          className="w-full h-full rounded-lg object-cover"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          autoPlay
        ></iframe>
        <p className="pl-5 mt-2 text-xs">{videoTitle}</p> 
      </div>

      <div
        style={noScrollbars}
        className="relative lg:w-[40%] flex flex-col gap-y-8 lg:overflow-y-auto  lg:pl-5 "
      >
        
        {videos.map((obj) => {
          // return <MovieCart key={Math.random()} videoURL={url} />;
          return <Cart key={Math.random()} thumbnails={obj.thumbnails} title={obj.title} channelName={obj.channelName} time={obj.time} videoId={obj.videoId} handleThumbnailclick={handleThumbnailclick}/>;
        })}
        
        
      </div>
    </div>
  );
}

// "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=[VIDEO_ID]&key=[API_KEY]"
