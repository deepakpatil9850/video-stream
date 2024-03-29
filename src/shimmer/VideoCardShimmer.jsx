import React from "react";

const VideoCardShimmer = () => {
  return (
    <div className="w-10/12 ">
      <div className="dark:bg-stone-800 bg-gray-200  animate-pulse rounded-lg m-2 aspect-video"></div>
      <div className="flex p-2 justify-between items-center">
        <div className="dark:bg-stone-800  bg-gray-200 animate-pulse rounded-full p-5 w-9"></div>
        <div className="w-3/4">
          <div className="grid grid-cols-4">
            <div className="col-span-4 p-2 m-1 bg-gray-200  dark:bg-stone-800 animate-pulse rounded-md"></div>
            <div className="col-span-2 p-2 m-1 bg-gray-200  dark:bg-stone-800 animate-pulse rounded-md"></div>
            <div className="col-span-3 p-2 m-1 bg-gray-200  dark:bg-stone-800 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCardShimmer;
