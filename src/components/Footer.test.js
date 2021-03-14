import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/",
});

import Footer from "./Footer";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Footer Component Testing", () => {
  it("Renders footer h6 tag text content", () => {
    act(() => {
      ReactDOM.render(<Footer />, rootContainer);
    });
    const h6 = rootContainer.querySelector("h6");
    expect(h6.textContent).to.equal(
      "Team 1 • Usability Testing and Verification"
    );
  });

  it("Expect facebook icon to exist", () => {
    act(() => {
      ReactDOM.render(<Footer />, rootContainer);
    });
    expect(<FacebookIcon />).to.exist;
  });

  it("Expect Instagram Icon to exist", () => {
    act(() => {
      ReactDOM.render(<Footer />, rootContainer);
    });
    expect(<InstagramIcon />).to.exist;
  });

  it("Expect Twitter Icon to exist", () => {
    act(() => {
      ReactDOM.render(<Footer />, rootContainer);
    });
    expect(<TwitterIcon />).to.exist;
  });
});
