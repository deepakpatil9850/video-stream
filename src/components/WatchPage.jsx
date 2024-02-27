import React from "react";
import StreamPage from "./StreamPage";
import RecommendList from "./RecommendList";
import { useSearchParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const channelId = params.get("cid");

  return (
    <div className="w-full md:grid md:grid-cols-5 md:p-3 lg:p-7 absolute top-14 bg-white dark:bg-stone-900 dark:text-white">
      <div className="md:col-span-3 md:p-2 lg:p-5">
        <ErrorBoundary fallback={<div>Can't proceed further</div>}>
          <StreamPage videoId={videoId} channelId={channelId} />
        </ErrorBoundary>
      </div>
      <div className="md:col-span-2 md:p-2 lg:p-5">
        <ErrorBoundary
          fallback={<div className="dark:text-white">Something went wrong</div>}
        >
          <RecommendList channelId={channelId} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default WatchPage;
