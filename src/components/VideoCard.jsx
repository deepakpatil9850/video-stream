import React, { useEffect, useState } from "react";
import { API_KEY, count } from "../utilies/constants";
import VideoCardShimmer from "../shimmer/VideoCardShimmer";

const VideoCard = ({ videoData }) => {
  const [channelImageUrl, setChannelImageUrl] = useState("");
  const { thumbnails, channelTitle, title, channelId } = videoData.snippet;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const channelData = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
        );
        const dataJson = await channelData.json();
        setChannelImageUrl(
          dataJson?.items[0]?.snippet?.thumbnails?.default?.url
        );
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <VideoCardShimmer />;
  return (
    <div className="overflow-hidden dark:text-white mb-2">
      <div className="aspect-video sm:rounded-2xl sm:hover:rounded-none sm:hover:duration-500 overflow-hidden">
        <img
          alt="thumbnail"
          src={thumbnails?.medium?.url}
          className="w-full object-cover aspect-video"
        />
      </div>
      <div className=" flex items-start justify-start py-2">
        <img
          src={channelImageUrl}
          alt="channel icon"
          className="w-9 rounded-full mt-3"
        />

        <div className=" ml-2 text-stone-700 dark:text-stone-400 font-serif font-medium ">
          <h1 className="line-clamp-2 p-1 text-stone-900 dark:text-stone-200">
            {title}
          </h1>
          <div className="flex sm:flex-none">
            <p className="text-sm">{channelTitle} &nbsp;</p>
            {videoData?.statistics?.viewCount && (
              <span className="text-sm">
                {count(videoData?.statistics?.viewCount)} views
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
