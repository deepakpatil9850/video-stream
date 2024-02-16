import React from "react";

const HorizonVideoCard = ({ item }) => {
  const { title, description, thumbnails } = item;
  return (
    <div className="w-full overflow-hidden p-1 my-1">
      <div className="flex">
        <div className="w-2/5">
          <img
            src={thumbnails?.medium?.url}
            alt="thumbnail"
            className="rounded-md"
          />
        </div>
        <div className="w-3/5 tracking-tight flex flex-col justify-between p-1">
          <p className="line-clamp-2 text-stone-900 dark:text-stone-200 font-normal">
            {description}
          </p>
          <p className="line-clamp-1 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default HorizonVideoCard;
