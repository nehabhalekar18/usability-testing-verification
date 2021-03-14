import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/",
});

import Banner from "./Banner";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Banner Component Testing", () => {
  it("Renders Never Stop Exploring Title", () => {
    act(() => {
      ReactDOM.render(<Banner />, rootContainer);
    });
    const h5 = rootContainer.querySelector("h5");
    expect(h5.textContent).to.equal("Never Stop Exploring");
  });

  it("Expect Location Icon to exist", () => {
    act(() => {
      ReactDOM.render(<Banner />, rootContainer);
    });
    expect(<LocationOnOutlinedIcon />).to.exist;
  });

  it("Search icon exist", () => {
    act(() => {
      ReactDOM.render(<Banner />, rootContainer);
    });
    expect(<SearchOutlinedIcon />).to.exist;
  });
});
