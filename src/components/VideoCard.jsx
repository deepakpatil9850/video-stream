import React from "react";
import usrIcon from "../utilies/social.png";

const VideoCard = ({ videoData }) => {
  const { thumbnails, channelTitle, title } = videoData.snippet;
  return (
    <div className="w-72 overflow-hidden dark:text-white p-2">
      <div className="rounded-2xl hover:rounded-none hover:duration-500 overflow-hidden">
        <img
          alt="thumbnail"
          src={thumbnails?.medium?.url}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className=" flex justify-between items-start py-2">
        <img
          src={usrIcon}
          alt="channel icon"
          className="w-9 align-middle dark:rounded-full py-2"
        />

        <div className=" ml-2 text-stone-700 dark:text-stone-400  font-roboto tracking-tight">
          <h1 className="line-clamp-3 p-1 text-stone-900 dark:text-stone-200 font-normal">
            {title}
          </h1>
          <p className="mt-1 text-xs">{channelTitle}</p>
          <span className="lining-nums text-xs">
            {videoData.statistics.viewCount} views
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
