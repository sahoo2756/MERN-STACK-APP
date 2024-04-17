import { userWatchedList_Model } from "../config/Schema/userWatchedListSchema.js";

function checkThePreviousAndCurrentURL_isSame({
  watchHistiryArr,
  currentVideoUrl,
}) {
  try {
    let previousObj = watchHistiryArr[watchHistiryArr.length - 1];
    console.log("watchHistoryArr = ", watchHistiryArr);
    console.log("previousObj = ", previousObj);
    console.log("previousObj.url = ", previousObj.url);
    const previousVideoUrl = previousObj.url;

    return previousVideoUrl === currentVideoUrl;
  } catch (error) {
    console.log(
      "error at checkThePreviousAndCurrentURL_isSame in pushWatchHistoryController file => ",
      error.message
    );
  }
}

async function pushWatchURL(req, res) {
  try {
    const { videoURL, email } = req.body.userData;

    console.log("hello I am pushUserWatchList");

    if (!videoURL) {
      console.log("VideoURL is a fasly Value = ", videoURL);
      // 406 not acceptable
      res.status(406).json({
        isSucess: false,
        message: "Provided VideoURL is a Fasly Value",
      });
    }

    const emailSpecifiedHistoryObj = await userWatchedList_Model.findOne({
      email,
    });
    const obj = emailSpecifiedHistoryObj;

    // checkTheUrl exit
    // if previous url and current url is same then don't put the cuurent url
    // if exit then delete the previous object which contains

    let isPreviousAndCurrentVideoUrlSame = checkThePreviousAndCurrentURL_isSame(
      {
        watchHistiryArr: obj.watchHistory,
        currentVideoUrl: videoURL,
      }
    );

    // if isPreviousAndCurrentVideoUrlSame === true then don't store the current videoUrl and return res.status(100)
    // if isPreviousAndCurrentVideoUrlSame === false then  store the current videoUrl and return res.status(200)

    if (isPreviousAndCurrentVideoUrlSame === true) {
      // 100 contrinue
      res
        .status(100)
        .json({ isSucess: false, message: "Previous Watch History is Same" });
    } else {
      let currentIndex = 0;

      if (obj.watchHistory.length > 0) {
        // means  watchHistiry contains atLeast 1 or atMost 500 watchList object inside the [watchHistory array]
        // then the current value of [obj.watchHistory.length] will be the value of  [currentIndex] because indexing starts from 0 of watchHistory individual objects.index.
        currentIndex = obj.watchHistory.length;
      }

      let response = await userWatchedList_Model.updateOne(
        { email },
        { $push: { watchHistory: { index: currentIndex, url: videoURL } } }
      );
      if (response.acknowledged === true) {
        res
          .status(200)
          .json({ isSucess: true, message: "Updated SucessFully of videoURL" });
      } else {
        res
          .status(400)
          .json({ isSucess: true, message: "Not Updated of videoURL" });
      }
    }
  } catch (error) {
    console.log(
      `Error at pushWatchURL main catchBlock Error ==> ${error.message}`
    );
  }
}

async function getWatchHistory(req, res) {
  try {
    const { email } = req.query;
    console.log("email ", email);
    console.log("getEmailWatch hsitory");
    if (!email) {
      console.log("email is a fasly Value = ", email);
      // 406 not acceptable
      res.status(406).json({
        isSucess: false,
        message: "Provided email is a Fasly Value",
      });
    }

    let res = await userWatchedList_Model.findOne({ email });

    console.log(res);

    let allUrl = res.watchHistory.map((obj) => obj.url);

    return res.status(200).json({
      isSucess: true,
      message: "Request SucessFully",
      links: allUrl,
    });
  } catch (error) {
    console.log(
      "error at getWatchHistory() in pushWatchUrlcontroller = ",
      error.message
    );
    res.status(500).json({ isSucess: false, message: "InternalServer Issue" });
  }
}

export { pushWatchURL, getWatchHistory };
