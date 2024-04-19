// import { createClient } from "pexels";

// async function getVideo(req, res) {
//   try {
//     const {videoName} = req.query;

//     if (!videoName) {
//       // 406 Not Acceptable
//       res
//         .status(406)
//         .json({ isSucess: false, message: "Required VideoName Feild" });
//     }

//     const API_KEY = process.env.PEXELS_API_KEY;
//     const client = createClient(API_KEY);
//     let query = (videoName) ? videoName : "nature"
//     client.videos
//       .search({ query  , per_page: 50, orientation: "square", size: "small" })
//       .then((videosContext) => {
//         const allVideoLinks = videosContext.videos.map(
//           (obj) => obj.video_files[0].link
//         );

//         if (allVideoLinks.length === 0) {
//           // 409 Conflict
//           console.log(`error at allVideoLinks.length`, allVideoLinks);
//           return res.status(409).json({
//             isSucess: false,
//             message: "Videos Not Available",
//             videoURL: [],
//           });
//         }
//         return res.status(200).json({
//           isSucess: true,
//           videoLinks : allVideoLinks,
//           message: "Sucessfully Get the Videos",
//         });
//       })
//       .catch((err) => {
//         console.log(
//           `Error at videoController.js getVideo() in fetchVideos section inner client.videos() catch block. Error is = ${err.message}`
//         );
//         return res
//           .status(500)
//           .json({
//             isSucess: false,
//             message: "problem at fetching videos in backend [apiURL]",
//           });
//       });
//   } catch (error) {
//     console.log(`error at main catch block getVideo() = ${error.message}`);
//     return res
//       .status(500)
//       .json({ isSucess: false, "Internal Server Issue": error.message });
//   }
// }

// export { getVideo };

// **********  Please Don't Delete The Above Comment Code *******************


import axios from "axios"
async function getVideo(req, res) {
  try {
    const { videoName } = req.query;

    if (!videoName) {
      // 406 Not Acceptable
      res
        .status(406)
        .json({ isSucess: false, message: "Required VideoName Feild" });
    }

    // 403 API_KEY -> The client does not have access rights to the content
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const url  = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoName}&maxResults=50&key=${API_KEY}&lang=hi`;
    

    const countTimeBack = ({ utcTime }) => {
      const yearsAgo =
        new Date().getFullYear() - new Date(utcTime).getFullYear();
      return yearsAgo;
    };

    const response = await axios.get(url);

    const allThumbnails = response.data.items.map(obj => obj.snippet.thumbnails.high.url);
    const allVideoTitle = response.data.items.map((obj) => obj.snippet.title);
    const allChannelName = response.data.items.map(obj => obj.snippet.channelTitle);
    const allVideoid = response.data.items.map((obj) => obj.id.videoId);
    const allVideotime = response.data.items.map((obj) => {
      let utcTime = obj.snippet.publishedAt;
      let time =  countTimeBack({ utcTime });
      return `${time} years ago`
    });

    let clientResponseArr = [];

    for (let i = 0; i < allThumbnails.length; i++) {
      clientResponseArr.push({
        thumbnails: allThumbnails[i],
        title: allVideoTitle[i],
        channelName : allChannelName[i],
        videoId: allVideoid[i],
        time: allVideotime[i],
      });
    }

    

    res.status(200).json({
      isSucess: true,
      videosInfo: clientResponseArr,
      message: "Sucessfully Get the Videos",
    });
  } catch (error) {
    console.log(`error at main catch block getVideo() = ${error.message}`);
    return res
      .status(500)
      .json({ isSucess: false, "Internal Server Issue": error.message });
  }
}

export { getVideo };
