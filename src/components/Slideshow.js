import React from "react";
import { HoverSlideshow } from "react-hover-slideshow";
 
// As a function component
function Slideshow(props) {
    const images = props.images;
 
    return (
        <div>
            <HoverSlideshow
                autoplay={true}
                aria-label="My pretty picture slideshow"
                images={images}
                width="760px"
                height="400px"
            />
        </div>
    );
}

export default Slideshow
 