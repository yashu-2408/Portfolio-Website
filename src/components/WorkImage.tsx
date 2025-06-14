import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  videoPreviewUrl?: string; // Updated prop name for clarity
  link?: string; // This prop is for making the whole image a link, separate from demo/github text links
}

const WorkImage = (props: Props) => {
  const [showVideo, setShowVideo] = useState(false);

  // No need for async/fetch if videoPreviewUrl is a direct path to a public asset
  const handleMouseEnter = () => {
    if (props.videoPreviewUrl) {
      setShowVideo(true);
    }
  };

  const handleMouseLeave = () => {
    if (props.videoPreviewUrl) {
      setShowVideo(false);
    }
  };

  return (
    <div className="work-image">
      <div // Changed from <a> to <div> if the image itself isn't the primary link
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // href={props.link} // Removed if div, or keep if <a> and props.link is used
        // target={props.link ? "_blank" : undefined}
        // rel={props.link ? "noopener noreferrer" : undefined}
        data-cursor={props.link ? "pointer" : "disable"} // Adjust cursor based on if it's a link
      >
        {/* The work-image-link-icon was for when the image itself was a link.
            If props.link is used, this can be re-enabled.
            If not, it can be removed or repurposed if a different icon is needed. */}
        {props.link && (
          <div className="work-image-link-icon"> {/* Ensure this class is styled in Work.css */}
            <MdArrowOutward />
          </div>
        )}

        {showVideo && props.videoPreviewUrl ? (
          <video src={props.videoPreviewUrl} autoPlay muted playsInline loop className="work-video-preview"></video>
        ) : (
          <img src={props.image} alt={props.alt} className="work-image-main" />
        )}
      </div>
    </div>
  );
};

export default WorkImage;
