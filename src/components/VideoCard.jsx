import React, { useState } from "react";
import { API_KEY } from "../utilies/constants";

const VideoCard = ({ videoData }) => {
  const [channelImageUrl, setChannelImageUrl] = useState("");
  const { thumbnails, channelTitle, title, channelId } = videoData.snippet;

  const fetchData = async () => {
    const channelData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
    );
    const dataJson = await channelData.json();
    setChannelImageUrl(dataJson?.items[0]?.snippet?.thumbnails?.default?.url);
  };

  fetchData();

  return (
    <div className="w-96 overflow-hidden dark:text-white p-2">
      <div className="rounded-2xl hover:rounded-none hover:duration-500 overflow-hidden">
        <img
          alt="thumbnail"
          src={thumbnails?.medium?.url}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className=" flex items-start justify-start py-2">
        <img
          src={channelImageUrl}
          alt="channel icon"
          className="w-9 rounded-full mt-3"
        />

        <div className=" ml-2 text-stone-700 dark:text-stone-400  font-roboto tracking-tight">
          <h1 className="line-clamp-3 p-1 text-stone-900 dark:text-stone-200 font-normal">
            {title}
          </h1>
          <p className="mt-1 text-xs">{channelTitle}</p>
          <span className="lining-nums text-xs">
            {videoData?.statistics?.viewCount} views
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
