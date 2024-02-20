import Comments from "./Comments";
import VideoDetails from "./VideoDetails";

const StreamPage = ({ videoId, channelId }) => {
  return (
    <div className="pr-6">
      <div>
        <iframe
          width="640"
          height="360"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allowFullScreen
          className="rounded-xl"
        />
        {/* Video Statistics */}
        <div>
          <VideoDetails videoId={videoId} channelId={channelId} />
        </div>
        {/* comment section */}
        <div className="">
          <Comments videoId={videoId} />
        </div>
      </div>
    </div>
  );
};

export default StreamPage;
