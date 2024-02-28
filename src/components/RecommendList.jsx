import React, { useEffect, useState } from "react";
import HorizonVideoCard from "./HorizonVideoCard";
import { API_KEY } from "../utilies/constants";
import { Link } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import HorizontalVideoShimmer from "../shimmer/HorizontalVideoShimmer";

const RecommendList = ({ channelId }) => {
  const [recoList, setRecoList] = useState([]);
  const [channelData, setChannelData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const recommentData = async () => {
      try {
        setIsLoading(true);
        const data = await fetch(
          `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=${API_KEY}`
        );
        const channelData = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
        );
        const dataJson = await channelData.json();
        const json = await data.json();
        setRecoList(json);
        setChannelData(dataJson?.items[0]?.snippet);
        setIsLoading(false);
      } catch (error) {
        showBoundary(error);

        setIsLoading(false);
      }
    };
    recommentData();
  }, [channelId]);

  if (isLoading)
    return (
      <div>
        <HorizontalVideoShimmer />
        <HorizontalVideoShimmer />
        <HorizontalVideoShimmer />
        <HorizontalVideoShimmer />
        <HorizontalVideoShimmer />
        <HorizontalVideoShimmer />
        <HorizontalVideoShimmer />
      </div>
    );
  const { title, thumbnails } = channelData;
  return (
    <div className="pl-3">
      <div>
        {recoList?.length !== 0 &&
          recoList?.items?.map((item) => (
            <Link
              key={item?.id}
              to={`/watch?v=${
                item?.contentDetails?.upload?.videoId !== undefined
                  ? item?.contentDetails?.upload?.videoId
                  : item?.contentDetails?.playlistItem?.resourceId?.videoId
              }&cid=${item?.snippet?.channelId}`}
            >
              <HorizonVideoCard
                item={item?.snippet}
                channelName={title}
                channelImgUrl={thumbnails?.default?.url}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecommendList;
