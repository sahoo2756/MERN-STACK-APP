export default async function fetchYoutubeVideos({ query, maxResults = 10 }) {
  try {
    const apiKey = "manas key";
    let dataUrl = `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}&maxResults=${maxResults}`;

    const response = await fetch(dataUrl);
    let data = await response.json();

    console.log("data => ", data);

    // Fetch details for each video
    let videoIds = data.items.map(item => item.id.videoId).join(',');
    let detailsURL = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&key=${apiKey}&part=snippet,statistics`;

    let res2 = await fetch(detailsURL);
    let data2 = await res2.json();

    console.log("data2 => ", data2);

    // Combine search results with video details
    let videos = data.items.map((item, index) => ({
      ...item,
      details: data2.items[index]
    }));

    return videos;
  } catch (error) {
    console.log("error at fetchYoutubeVideos ", error.message);
    throw error; // Rethrow the error to handle it at the caller level
  }
}
