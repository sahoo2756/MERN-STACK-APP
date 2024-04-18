import axios from "axios";

export default async function fetchVideos_API({ videoName, setVideos }) {
  
  try {
    const res = await axios.get(
      `http://localhost:4000/api/videos?videoName=${videoName}`,
      { withCredentials: true }
    );
    

    if (res.data) {
      if (res.data.isSucess) {
        setVideos(res.data.videosInfo);
        
        return {
          isSucess: true,
          videosInfo : res.data.videosInfo,
          statusCode: 200,
          message: "Videos Get Sucessfully",
          /*
          videosInfo is an array of Object
            videosInfo = [
              {
                thumbnails: `url`,
                title: 'string',
                videoid: `url`,
                time: integer-value,
              } , {} , {} , {] , {} , {} , {}
            ]
          */
        };
      } else {
        return {
          isSucess: false,
          message: "Videos Not Available",
          statusCode: res.status,
        };
      }
    } else {
      return {
        isSucess: false,
        message: "Videos Not Available",
        statusCode: res.status,
      };
    }
  } catch (error) {
    console.log(`Error at fetchVideos_API `, error.response);
    return {
      isSucess: false,
      message: error.response.data.message || " ",
      statusCode: error.response.status,
    };
  }
}

// fetchYoutubeVideos({});

// const video =  obj.videos[0].videoFiles[0].link
// videos[0 - 5] , videoFiles[ 0 - 5]
