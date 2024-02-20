import React from "react";
import StreamPage from "./StreamPage";
import RecommendList from "./RecommendList";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const channelId = params.get("cid");

  return (
    <div className="w-full absolute top-14 bg-white dark:bg-stone-900 dark:text-white flex p-10">
      <div className="w-7/12 ">
        <StreamPage videoId={videoId} channelId={channelId} />
      </div>
      <div className="w-5/12">
        <RecommendList channelId={channelId} />
      </div>
    </div>
  );
};

export default WatchPage;
