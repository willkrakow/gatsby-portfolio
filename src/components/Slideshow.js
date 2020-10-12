import React from "react";
import { HoverSlideshow } from "react-hover-slideshow";
 
// As a function component
function Slideshow(props) {
    const imageURLs = props.images;
 
    return (
        <div>
            <HoverSlideshow
                aria-label="My pretty picture slideshow"
                images={imageURLs}
                width="760px"
                height="400px"
            />
        </div>
    );
}

export default Slideshow
 