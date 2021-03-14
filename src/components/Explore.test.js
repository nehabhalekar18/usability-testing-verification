import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

global.document = jsdom({
  url: "http://localhost:3000/",
});

import Explore from "./Explore";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Explore Component Testing", () => {
  it("Renders Never Stop Exploring Title", () => {
    act(() => {
      ReactDOM.render(<Explore />, rootContainer);
    });
    const button = rootContainer.querySelector("button");
    expect(button.textContent).to.equal("Load More");
  });
});
