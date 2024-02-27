import Comments from "./Comments";
import VideoDetails from "./VideoDetails";

const StreamPage = ({ videoId, channelId }) => {
  return (
    <div className="w-full">
      <div>
        <iframe
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allowFullScreen
          autoPlay
          className="md:rounded-xl aspect-video w-full"
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
