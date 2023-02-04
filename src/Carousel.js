import AwesomeSlider from "react-awesome-slider";
import AwsSliderStyles from "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import React from "react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Carousel() {
  return (
    <div>
      <h2>Новинки</h2>
      <AwesomeSlider
      bullets = {false}>
        
        <div>
          <img src={require("./Pictures/item4.jpg")} />{" "}
        </div>
        <div>
        <img src={require("./Pictures/item1.jpg")} />{" "}
        </div>
        <div>
        <img src={require("./Pictures/item2.jpg")} />{" "}
        </div>
        <div>
        <img src={require("./Pictures/item3.jpg")} />{" "}
        </div>
        {/* <div data-src="/path/to/image-1.png" />
        <div data-src="/path/to/image-2.jpg" /> */}
      </AwesomeSlider>{" "}
    </div>
  );
}

export default Carousel;
