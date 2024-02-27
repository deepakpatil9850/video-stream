import React from "react";

const HorizonVideoCard = ({ item, channelImgUrl, channelName }) => {
  const { title, thumbnails } = item;
  return (
    <div className="w-full overflow-hidden p-1 my-1">
      <div className="flex">
        <div className="w-5/12">
          <img
            src={thumbnails?.medium?.url}
            alt="thumbnail"
            className="rounded-md aspect-video"
          />
        </div>
        <div className="w-7/12 tracking-tight flex flex-col justify-between p-2">
          <p className="line-clamp-2 text-stone-900 dark:text-stone-200 font-normal">
            {title}
          </p>
          <div className="flex items-center">
            <img
              src={channelImgUrl}
              alt="channel logo"
              className="w-6 mr-2 rounded-full"
            />
            <p className="line-clamp-1 text-sm">{channelName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonVideoCard;
