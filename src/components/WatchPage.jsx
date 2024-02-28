import React from "react";
import StreamPage from "./StreamPage";
import RecommendList from "./RecommendList";
import { useSearchParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMini from "./ErrorMini";

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get("v");
  const channelId = params.get("cid");

  return (
    <div className="w-full md:grid md:grid-cols-5 md:p-3 lg:p-7 absolute top-14 bg-white dark:bg-stone-900 dark:text-white">
      <div className="md:col-span-3 md:p-2 lg:p-5">
        <ErrorBoundary fallback={<ErrorMini />}>
          <StreamPage videoId={videoId} channelId={channelId} />
        </ErrorBoundary>
      </div>
      <div className="md:col-span-2 md:p-2 lg:p-5">
        <ErrorBoundary fallback={<ErrorMini />}>
          <RecommendList channelId={channelId} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default WatchPage;
