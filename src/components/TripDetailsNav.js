import React, { useState } from "react";
import "./TripDetailsNav.css";

function TripDetailsNav({ contentDetails }) {
  const [uploadContent, setUploadContent] = useState(false);
  function journalContents() {
    setUploadContent(true);
    var journalBtn = document.getElementById("journalBtn");
    var tripDetailsBtn = document.getElementById("tripDetailsBtn");
    journalBtn.classList.add("tripDetailsNav--active");
    tripDetailsBtn.classList.remove("tripDetailsNav--active");
    contentDetails(false, true);
  }
  function tripDetailsContents() {
    setUploadContent(false);
    var tripDetailsBtn = document.getElementById("tripDetailsBtn");
    var journalBtn = document.getElementById("journalBtn");
    tripDetailsBtn.classList.add("tripDetailsNav--active");
    journalBtn.classList.remove("tripDetailsNav--active");
    contentDetails(true, false);
  }
  return (
    <div className="tripDetailsNav">
      <div className="tripDetailsNav__left">
        <button
          id="tripDetailsBtn"
          onClick={(e) => tripDetailsContents(e)}
          className="tripDetailsNav--active">
          Trip Details
        </button>
        <button id="journalBtn" onClick={(e) => journalContents(e)}>
          Journal
        </button>
      </div>
      {uploadContent ? (
        <div className="tripDetailsNav__right">
          <div className="tripDetailsNav__upload">
            <input type="file" />
            <h6>Upload</h6>
            <i className="bi bi-upload"></i>
          </div>
          <select>
            <option>All</option>
            <option>Photos</option>
            <option>Blogs</option>
          </select>
        </div>
      ) : null}
    </div>
  );
}

export default TripDetailsNav;
