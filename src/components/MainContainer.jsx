import React, { useEffect, useState } from "react";
import { API_KEY } from "../utilies/constants";
import VideoCard from "./VideoCard";
const MainContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchLink();
  }, []);

  console.log(data);
  const fetchLink = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
        API_KEY
    );
    const json = await data.json();
    setData(json);
  };

  if (data === null)
    return (
      <div>
        <h1>No video available</h1>
      </div>
    );

  return (
    <div className="w-10/12 p-5 grid grid-cols-4 gap-4">
      {data?.items.map((item) => (
        <VideoCard key={item.id} videoData={item} />
      ))}
    </div>
  );
};

export default MainContainer;
