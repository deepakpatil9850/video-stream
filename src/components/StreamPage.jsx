import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const StreamPage = () => {
  const [comments, setComments] = useState(null);
  const [params] = useSearchParams();
  const videoId = params.get("v");

  useEffect(() => {
    const commentData = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=AIzaSyB6l1hbV5xlPxUCyt43AArmy0l-X7XtiYk`
      );
      const json = await data.json();
      setComments(json);
    };
    commentData();
  }, [videoId]);

  return (
    <div>
      <div className="">
        <iframe
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-xl"
        />

        {/* comment section */}
        <div className="">
          <div>
            {comments !== null &&
              comments.items.map((item) => (
                <div key={item.etag} className=" flex p-3">
                  <div className=" h-16 w-16">
                    <img
                      src={
                        item.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                      alt=""
                      className="rounded-full max-w-none p-2"
                    />
                  </div>
                  <div className="p-2">
                    <h1 className="text-sm font-bold">
                      {item.snippet.topLevelComment.snippet.authorDisplayName}
                    </h1>
                    <p className="tracking-tight">
                      {item.snippet.topLevelComment.snippet.textOriginal}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
