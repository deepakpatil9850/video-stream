import React from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoListGrid = ({ loadData }) => {
  return (
    <div className="w-full sm:grid sm:grid-cols-2 sm:gap-3 sm:p-3  lg:grid-cols-3 lg:gap-6 lg:p-6 2xl:grid-cols-4 absolute top-12 dark:bg-stone-900">
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
