import React, { useEffect, useState } from "react";
import { API_KEY } from "../utilies/constants";

const Comments = ({ videoId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
      );

      const commentJson = await data.json();
      setCommentList(commentJson);
    }
    fetchData();
  }, [videoId]);

  if (
    commentList?.error?.code >= 400 ||
    commentList.length === 0 ||
    commentList === undefined ||
    commentList === null
  ) {
    return (
      <div>
        <h1>Comments are Disabled</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        {commentList?.items.length !== 0 &&
          commentList?.items?.map((item) => (
            <div key={item?.etag} className=" flex p-3">
              <div className=" h-16 w-16">
                <img
                  src={
                    item?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl
                  }
                  alt=""
                  className="rounded-full max-w-none p-2  h-14 w-14"
                />
              </div>
              <div className="p-2">
                <h1 className="text-sm font-bold">
                  {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                </h1>
                <p className="tracking-tight line-clamp-5">
                  {item?.snippet?.topLevelComment?.snippet?.textOriginal}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
