import axios from "axios";

export default async function fetchVideos_API({ query, setVideos }) {
  
  try {
    const res = await axios.get(
      `http://localhost:4000/api/videos?query=${query}`,
      { withCredentials: true }
    );
    

    if (res.data) {
      if (res.data.isSucess) {
        setVideos(res.data.videoLinks)
        return {
          isSucess: true,
          videoURL : res.data.videoLinks,
          statusCode: 200,
          message: "Videos Get Sucessfully",
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
