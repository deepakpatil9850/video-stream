import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HorizonVideoCard from "./HorizonVideoCard";
import { Link } from "react-router-dom";

const RecommendList = () => {
  const [recoList, setRecoList] = useState([]);

  const [params] = useSearchParams();
  const channelId = params.get("cid");

  useEffect(() => {
    const recommentData = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=AIzaSyB6l1hbV5xlPxUCyt43AArmy0l-X7XtiYk`
      );
      const json = await data.json();
      setRecoList(json);
    };
    recommentData();
  }, [channelId]);

  return (
    <div className="pl-3">
      <div>
        {recoList.length !== 0 &&
          recoList.items.map((item) => (
            <Link
              key={item?.id}
              to={`/watch?v=${
                item?.contentDetails?.upload?.videoId !== undefined
                  ? item?.contentDetails?.upload?.videoId
                  : item?.contentDetails?.playlistItem?.resourceId?.videoId
              }&cid=${item?.snippet?.channelId}`}
            >
              <HorizonVideoCard item={item?.snippet} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RecommendList;
