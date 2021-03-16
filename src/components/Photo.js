import React, { Link } from "react";
import "./Photo.css";
import CloseIcon from "@material-ui/icons/Close";

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
      <img src={selectedImage}></img>
    </div>
  );
}

export default Photo;
