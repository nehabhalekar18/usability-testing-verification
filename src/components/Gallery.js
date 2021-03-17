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
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg1}
            onClick={(e) => {
              setSelectedImage(StoryImg1);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg2}
            onClick={(e) => {
              setSelectedImage(StoryImg2);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg3}
            onClick={(e) => {
              setSelectedImage(StoryImg3);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg4}
            onClick={(e) => {
              setSelectedImage(StoryImg4);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg5}
            onClick={(e) => {
              setSelectedImage(StoryImg5);
            }}
          />
        </Link>
      </div>
      <div className="storyBook__row">
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg6}
            onClick={(e) => {
              setSelectedImage(StoryImg6);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg7}
            onClick={(e) => {
              setSelectedImage(StoryImg7);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg8}
            onClick={(e) => {
              setSelectedImage(StoryImg8);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg9}
            onClick={(e) => {
              setSelectedImage(StoryImg9);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg10}
            onClick={(e) => {
              setSelectedImage(StoryImg10);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg11}
            onClick={(e) => {
              setSelectedImage(StoryImg11);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg12}
            onClick={(e) => {
              setSelectedImage(StoryImg12);
            }}
          />
        </Link>
      </div>
      <div className="storyBook__row">
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg13}
            onClick={(e) => {
              setSelectedImage(StoryImg13);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg14}
            onClick={(e) => {
              setSelectedImage(StoryImg14);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg15}
            onClick={(e) => {
              setSelectedImage(StoryImg15);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg16}
            onClick={(e) => {
              setSelectedImage(StoryImg16);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg17}
            onClick={(e) => {
              setSelectedImage(StoryImg17);
            }}
          />
        </Link>
      </div>
      <div className="storyBook__row">
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg18}
            onClick={(e) => {
              setSelectedImage(StoryImg18);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg19}
            onClick={(e) => {
              setSelectedImage(StoryImg19);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg9}
            onClick={(e) => {
              setSelectedImage(StoryImg9);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg20}
            onClick={(e) => {
              setSelectedImage(StoryImg20);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg21}
            onClick={(e) => {
              setSelectedImage(StoryImg21);
            }}
          />
        </Link>
        <Link to="/gallery">
          <img
            className="storyBook__img"
            src={StoryImg22}
            onClick={(e) => {
              setSelectedImage(StoryImg22);
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
