import { createClient } from "pexels";

async function getVideo(req, res) {
  try {
    const {videoName} = req.query;
    console.log(videoName)

    if (!videoName) {
      // 406 Not Acceptable
      res
        .status(406)
        .json({ isSucess: false, message: "Required VideoName Feild" });
    }

    const API_KEY = process.env.PEXELS_API_KEY;
    const client = createClient(API_KEY);
    let query = (videoName) ? videoName : "nature"
    client.videos
      .search({ query  , per_page: 50, orientation: "square", size: "small" })
      .then((videosContext) => {
        const allVideoLinks = videosContext.videos.map(
          (obj) => obj.video_files[0].link
        );
        console.log(videosContext)

        if (allVideoLinks.length === 0) {
          // 409 Conflict
          console.log(`error at allVideoLinks.length`, allVideoLinks);
          return res.status(409).json({
            isSucess: false,
            message: "Videos Not Available",
            videoURL: [],
          });
        }
        return res.status(200).json({
          isSucess: true,
          videoLinks : allVideoLinks,
          message: "Sucessfully Get the Videos",
        });
      })
      .catch((err) => {
        console.log(
          `Error at videoController.js getVideo() in fetchVideos section inner client.videos() catch block. Error is = ${err.message}`
        );
        return res
          .status(500)
          .json({
            isSucess: false,
            message: "problem at fetching videos in backend [apiURL]",
          });
      });
  } catch (error) {
    console.log(`error at main catch block getVideo() = ${error.message}`);
    return res
      .status(500)
      .json({ isSucess: false, "Internal Server Issue": error.message });
  }
}

export { getVideo };



