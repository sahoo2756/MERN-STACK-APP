export default async function fetchYoutubeVideos({ query , maxResults = 1000 , SendHetroGeneousVideo = false}) {
  try {

    const apiKey = "AIzaSyBiRRoliElqnYKitt8bL3ME9-uHedM8l28";
    let dataUrl = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&maxResults=10`;

    const response = await fetch(dataUrl);
    let data = await response.json();

    console.log("data => " , data); 



    let videoId = data.items[0].id.videoId;
    let detailsURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet,statistics`;

    let res2 = await fetch(detailsURL);
    let data2 = await res2.json();

    console.log("data2 => " , data2)
    

    // console.log("data => ", data);
    return data;
  } catch (error) {
    console.log("error at fetchYoutubeVideos ", error.message);
  }
}
