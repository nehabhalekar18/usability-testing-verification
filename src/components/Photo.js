import React from "react";
import "./Photo.css";

function Photo({ selectedImage, setSelectedImage }) {
  const closeHandler = () => {
    console.log("closed");
    setSelectedImage(null);
  };
  return (
    <div
      className="photo"
      onClick={(e) => {
        closeHandler();
      }}>
      <img src={selectedImage} alt=""></img>
    </div>
  );
}

export default Photo;
