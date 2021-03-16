import React from "react";
import EmptyJournal from "../assets/empty-journal-img.png";
import "./NewJournal.css";

function NewJournal() {
  return (
    <div className="newJournal">
      <img src={EmptyJournal} alt="" />
    </div>
  );
}

export default NewJournal;
