import React from "react";
import "./Video.css"; // Import the CSS for styling

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source
          src="https://stonepedia.in/wp-content/uploads/2024/10/Stonepedia-T-5.mp4"
          type="video/mp4"
        />
        {/* Add multiple sources for different formats if necessary */}
        <source src="path-to-your-video.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
