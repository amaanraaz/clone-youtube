const API_KEY = "AIzaSyDPxuHcMm-B5ZCYAGUr4udFvzKAfTuHp60"
export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key="+API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key="+ API_KEY + "&q=";
