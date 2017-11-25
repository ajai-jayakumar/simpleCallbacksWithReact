// Import npm packages here
import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-details col-md-8">
      <div className="embed">
        <iframe className="embed-responsive-item" src={url} width="100%" height="570"></iframe>
      </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
    </div>
  );
};

export default VideoDetail;