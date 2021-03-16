import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React from "react";
import TextTruncate from "react-text-truncate";
import journalData from "../constants/journalData";
import "./Journal.css";

function Journal({ journalContents }) {
  const marinaBeachList = journalData.marinaBeach;
  const palmIslandList = journalData.palmBeach;
  const marinaBeach = marinaBeachList.map((data) => {
    return journalContents === "photos" ? (
      data.category === "photo" ? (
        <div className="col-sm-4">
          <div className="journal__card journal__card__photo">
            <img src={data.image} alt="" />
          </div>
        </div>
      ) : null
    ) : journalContents === "blogs" ? (
      data.category === "blog" ? (
        <div className="col-sm-4">
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
        </div>
      ) : null
    ) : (
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
    return journalContents === "photos" ? (
      data.category === "photo" ? (
        <div className="col-sm-4">
          <div className="journal__card journal__card__photo">
            <img src={data.image} alt="" />
          </div>
        </div>
      ) : null
    ) : journalContents === "blogs" ? (
      data.category === "blog" ? (
        <div className="col-sm-4">
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
        </div>
      ) : null
    ) : (
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
      <h6 className="journal__locationName">
        <LocationOnOutlinedIcon />
        Marina Beach Island
      </h6>
      <div className="row">{marinaBeach}</div>
      <br />
      <h6>01.02.2021</h6>
      <h6 className="journal__locationName">
        <LocationOnOutlinedIcon />
        Palm Island
      </h6>
      <div className="row">{palmIsland}</div>
    </div>
  );
}

export default Journal;
