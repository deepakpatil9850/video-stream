import React, { useState } from "react";
import { useEffect } from "react";
import { API_KEY } from "../utilies/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

const VideoDetails = ({ videoId, channelId }) => {
  const [vInfo, setVInfo] = useState([]);
  const [channelInfo, setChannelInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const videoInfo = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );

      const channelData = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
      );

      const videoData = await videoInfo.json();
      setVInfo(videoData);
      const channelJson = await channelData.json();
      setChannelInfo(channelJson);
    };
    fetchData();
  }, [videoId, channelId]);
  if (
    vInfo.length === 0 ||
    vInfo == null ||
    vInfo === undefined ||
    channelInfo.length === 0 ||
    channelInfo === undefined
  ) {
    return <div>Data Loading</div>;
  }
  const { channelTitle, description, title } = vInfo?.items[0]?.snippet;
  const { commentCount, likeCount, viewCount } = vInfo?.items[0]?.statistics;
  const { hiddenSubscriberCount, subscriberCount } =
    channelInfo?.items[0]?.statistics;
  return (
    <div>
      {/* channel Strip */}
      <h1 className="text-xl font-semibold py-2">{title}</h1>
      <div className="p-1 flex justify-between h-12">
        <div className=" flex">
          <img
            src={channelInfo?.items[0]?.snippet?.thumbnails?.medium?.url}
            alt="channel logo"
            className="rounded-full"
          />
          <div className="pl-2">
            <h1 className="tracking-tight font-bold">{channelTitle}</h1>
            <p className="text-sm">
              {!hiddenSubscriberCount && subscriberCount}
            </p>
          </div>
        </div>
        <button className="px-4 rounded-full dark:bg-stone-700 bg-gray-200 hover:bg-gray-300 border text-sm">
          Subscribe
        </button>
        <div className="">
          <button className="px-4 rounded-l-full dark:bg-stone-700 bg-gray-200 hover:bg-gray-300 h-full">
            <FontAwesomeIcon icon={faThumbsUp} className="text-lg" />{" "}
            <span className="text-sm">{likeCount}</span>
          </button>
          <button className="px-4 rounded-r-full dark:bg-stone-700 bg-gray-200 hover:bg-gray-300 border-l dark:border-gray-600 border-gray-300 h-full">
            <FontAwesomeIcon icon={faThumbsDown} className="text-lg" />
          </button>
        </div>
        <button className="px-4 rounded-full dark:bg-stone-700 bg-gray-100 hover:bg-gray-300 h-full">
          <span className="text-sm">Share </span>
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
      {/* Description Strip */}
      <div className="my-3">
        <div className="bg-gray-200 dark:bg-stone-800 px-4 py-2 rounded-md">
          <p className=" tracking-tight">{viewCount} views </p>
          <p className="tracking-tight text-sm line-clamp-5">{description}</p>
        </div>
        <h1 className="text-xl font-semibold py-2 ">{commentCount} Comments</h1>
      </div>
    </div>
  );
};

export default VideoDetails;
