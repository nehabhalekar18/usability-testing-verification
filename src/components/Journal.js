import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React from "react";
import TextTruncate from "react-text-truncate";
import journalData from "../constants/journalData";
import "./Journal.css";

function Journal() {
  const marinaBeachList = journalData.slice(0, 4);
  const palmIslandList = journalData.slice(5, 10);
  const marinaBeach = marinaBeachList.map((data) => {
    return (
      <div className="col-sm-4">
        {data.category === "both" ? (
          <div className="journal__card journal__card__both">
            <img src={data.image} alt="" />
            <p>
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={data.contents}
                textTruncateChild={<a href="/">Read on</a>}
              />
            </p>
          </div>
        ) : null}
        {data.category === "photo" ? (
          <div className="journal__card journal__card__photo">
            <img src={data.image} alt="" />
          </div>
        ) : null}
        {data.category === "blog" ? (
          <div className="journal__card journal__card__blog">
            <p>
              <TextTruncate
                line={8}
                element="span"
                truncateText="…"
                text={data.contents}
                textTruncateChild={<a href="/">Read on</a>}
              />
            </p>
          </div>
        ) : null}
      </div>
    );
  });
  const palmIsland = palmIslandList.map((data) => {
    return (
      <div className="col-sm-4">
        {data.category === "both" ? (
          <div className="journal__card journal__card__both">
            <img src={data.image} alt="" />
            <p>
              <TextTruncate
                line={2}
                element="span"
                truncateText="…"
                text={data.contents}
                textTruncateChild={<a href="/">Read on</a>}
              />
            </p>
          </div>
        ) : null}
        {data.category === "photo" ? (
          <div className="journal__card journal__card__photo">
            <img src={data.image} alt="" />
          </div>
        ) : null}
        {data.category === "blog" ? (
          <div className="journal__card journal__card__blog">
            <p>
              <TextTruncate
                line={8}
                element="span"
                truncateText="…"
                text={data.contents}
                textTruncateChild={<a href="/">Read on</a>}
              />
            </p>
          </div>
        ) : null}
      </div>
    );
  });
  return (
    <div className="journal">
      <h6>01.02.2021</h6>
      <h6>
        <LocationOnOutlinedIcon />
        Marina Beach Island
      </h6>
      <div className="row">{marinaBeach}</div>
      <br />
      <h6>01.02.2021</h6>
      <h6>
        <LocationOnOutlinedIcon />
        Palm Island
      </h6>
      <div className="row">{palmIsland}</div>
    </div>
  );
}

export default Journal;
