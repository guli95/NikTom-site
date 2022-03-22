import React from "react";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import "../css/lightbox.css";
const LightBox = (props) => (
  <div className="gallery-wrapper">
    <Gallery>
      {props.assets.map((item, index) => (
        <Item
          key={index}
          original={item}
          thumbnail={item}
          width="1024"
          height="768"
        >
          {({ ref, open }) => <img ref={ref} onClick={open} src={item} />}
        </Item>
      ))}
    </Gallery>
  </div>
);

export default LightBox;
