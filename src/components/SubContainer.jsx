import React, { useEffect, useState } from "react";
import { API_KEY } from "../utilies/constants";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";

const MainContainer = () => {
  const [loadData, setLoadData] = useState(null);
  const [params] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&key=${API_KEY}&${
          params.size === 0 ? "" : `&videoCategoryId=${params.get("Category")}`
        }`
      );
      const data = await response.json();
      setLoadData(data.items);
    };
    fetchData();
  }, [params]);

  if (
    loadData === undefined ||
    loadData === null ||
    loadData?.error?.code === 400
  )
    return (
      <div className="w-full min-h-screen flex justify-center items-center dark:text-white dark:bg-black absolute top-14">
        <h1 className="m-5 text-center font-bold text-xl ">
          No video available
        </h1>
      </div>
    );

  return (
    <div className="w-full sm:grid sm:grid-cols-2 sm:gap-3 sm:p-3  lg:grid-cols-3 lg:gap-6 lg:p-6 2xl:grid-cols-4 absolute top-12 dark:bg-stone-900">
      {loadData?.map((item) => (
        <Link
          key={item?.id}
          to={"/watch?v=" + item?.id + "&cid=" + item?.snippet?.channelId}
        >
          <VideoCard videoData={item} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
