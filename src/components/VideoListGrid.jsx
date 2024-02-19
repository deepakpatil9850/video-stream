import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoListGrid = ({ loadData }) => {
  return (
    <div className="w-full p-5 flex flex-wrap justify-around align-top absolute top-12 dark:bg-stone-900">
      {loadData !== null &&
        loadData?.map((item) => (
          <Link
            key={item?.etag}
            to={
              "/watch?v=" +
              item?.id?.videoId +
              "&cid=" +
              item?.snippet?.channelId
            }
          >
            <VideoCard videoData={item} />
          </Link>
        ))}
    </div>
  );
};

export default VideoListGrid;
