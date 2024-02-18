import React from "react";
import StreamPage from "./StreamPage";
import RecommendList from "./RecommendList";

const WatchPage = () => {
  return (
    <div className="w-full absolute top-14 bg-white dark:bg-stone-900 dark:text-white flex p-10">
      <div className="w-7/12 ">
        <StreamPage />
      </div>
      <div className="w-5/12">
        <RecommendList />
      </div>
    </div>
  );
};

export default WatchPage;
