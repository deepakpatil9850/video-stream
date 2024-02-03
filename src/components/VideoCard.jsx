import React from "react";

const VideoCard = ({ videoData }) => {
  const { thumbnails, channelId, channelTitle, title } = videoData.snippet;
  return (
    <div>
      <div>
        <div className="w-60 border shadow" id={channelId}>
          <img
            alt="thumbnail"
            src={thumbnails?.standard?.url}
            className="w-full"
          />
          <div>
            <h1 className="font-medium text-sm">{title}</h1>
            <h1 className="font-medium text-xs">{channelTitle}</h1>
            <span>{videoData.statistics.viewCount}views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
