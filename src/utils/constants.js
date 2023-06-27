const API_KEY = "AIzaSyDPxuHcMm-B5ZCYAGUr4udFvzKAfTuHp60"
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+API_KEY;
export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key="+ API_KEY + "&q=";

// link for details 
//https://www.googleapis.com/youtube/v3/commentThreads?key=******************&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=5
