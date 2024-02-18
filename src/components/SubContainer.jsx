import React, { useEffect, useState } from "react";
import { API_KEY } from "../utilies/constants";
import VideoCard from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";

const MainContainer = () => {
  const [data, setData] = useState(null);
  const [params] = useSearchParams();

  useEffect(() => {
    const checkParam = () => {
      if (params.size === 0)
        return fetch(
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&key=" +
            API_KEY
        );
      return fetch(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=IN&key=" +
          API_KEY +
          "&videoCategoryId=" +
          params.get("Category")
      );
    };
    const fetchLink = () => {
      checkParam()
        .then((res) => res.json())
        .then((jsonData) => setData(jsonData));
    };
    fetchLink();
  }, [params]);

  if (data === null || data.hasOwnProperty("error"))
    return (
      <div className="w-full flex justify-center items-center absolute top-12">
        <h1 className="m-5 text-center font-bold text-xl">
          No video available
        </h1>
      </div>
    );

  return (
    <div className="w-full p-5 flex flex-wrap justify-around align-top absolute top-12 dark:bg-stone-900">
      {data?.items.map((item) => (
        <Link
          key={item.id}
          to={"/watch?v=" + item.id + "&cid=" + item.snippet.channelId}
        >
          <VideoCard videoData={item} />
        </Link>
      ))}
    </div>
  );
};

export default MainContainer;
