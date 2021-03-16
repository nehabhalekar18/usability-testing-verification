import React from "react";
import { Link } from "react-router-dom";
import StoryImg2 from "../assets/sufouh-beach-img.jpg";
import StoryImg4 from "../assets/storybook-img-4.png";
import StoryImg1 from "../assets/dubai-banner-img.jpg";
import StoryImg5 from "../assets/dubai-mall-img.jpg";
import StoryImg3 from "../assets/bar.jpg";
import StoryImg6 from "../assets/storybook-img-6.png";
import StoryImg7 from "../assets/storybook-img-7.jpg";
import StoryImg8 from "../assets/storybook-img-8.png";
import StoryImg9 from "../assets/storybook-img-9.png";
import StoryImg10 from "../assets/storybook-img-10.png";
import StoryImg11 from "../assets/storybook-img-11.png";
import StoryImg12 from "../assets/storybook-img-12.jpg";
import StoryImg13 from "../assets/storybook-img-13.png";
import StoryImg14 from "../assets/storybook-img-14.jpg";
import StoryImg15 from "../assets/storybook-img-15.png";
import StoryImg16 from "../assets/storybook-img-16.png";
import StoryImg17 from "../assets/dubai-fountain-img.jpg";
import StoryImg18 from "../assets/storybook-img-18.jpg";
import StoryImg19 from "../assets/storybook-img-19.png";
import StoryImg20 from "../assets/storybook-img-20.png";
import StoryImg21 from "../assets/la-mer-img.jpg";
import StoryImg22 from "../assets/london-img.jpg";
import "./Gallery.css";

function Gallery() {
  return (
    <div className="storyBook">
      <div className="storyBook__row">
        <Link to="/gallery/photo">
          <img className="storyBook__img1" src={StoryImg1} alt="" />
        </Link>
        <img src={StoryImg2} alt="" />
        <img src={StoryImg3} alt="" />
        <img src={StoryImg4} alt="" />
        <img className="storyBook_imgEnd" src={StoryImg5} alt="" />
      </div>
      <div className="storyBook__row">
        <img className="storyBook_imgStart" src={StoryImg6} alt="" />
        <img src={StoryImg7} alt="" />
        <img src={StoryImg8} alt="" />
        <img src={StoryImg9} alt="" />
        <img src={StoryImg10} alt="" />
        <img src={StoryImg11} alt="" />
        <img className="storyBook_imgEnd" src={StoryImg12} alt="" />
      </div>
      <div className="storyBook__row">
        <img className="storyBook_imgStart" src={StoryImg13} alt="" />
        <img src={StoryImg14} alt="" />
        <img src={StoryImg15} alt="" />
        <img src={StoryImg16} alt="" />
        <img className="storyBook_imgEnd" src={StoryImg17} alt="" />
      </div>
      <div className="storyBook__row">
        <img className="storyBook_imgStart" src={StoryImg18} alt="" />
        <img src={StoryImg19} alt="" />
        <img src={StoryImg9} alt="" />
        <img src={StoryImg20} alt="" />
        <img src={StoryImg21} alt="" />
        <img className="storyBook_imgEnd" src={StoryImg22} alt="" />
      </div>
    </div>
  );
}

export default Gallery;
