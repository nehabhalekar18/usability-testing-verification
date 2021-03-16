import React from "react";

function Photo({ selectedImage }) {
  return (
    <div className="photo">
      <h1>Model</h1>
      <img src={selectedImage}></img>
    </div>
  );
}

export default Photo;
