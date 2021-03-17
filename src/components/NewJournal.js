import React from "react";
import EmptyJournal from "../assets/empty-journal-img.png";
import "./NewJournal.css";

function NewJournal() {
  return (
    <div className="newJournal">
      <img src={EmptyJournal} alt="" />
      <h6>Start uploading photos or type in your memories</h6>
      <div className="newJournal__actions">
        <button>
          <i className="bi bi-upload"></i> Upload Photos
        </button>
        <button>
          <i class="bi bi-file-text"></i> Type something
        </button>
      </div>
    </div>
  );
}

export default NewJournal;
