import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import WelcomePage from "./Welcome";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <WelcomePage />
    </BrowserRouter>
  );
});

it("matches snapshot", function(){
  const {asFragment}= render(<BrowserRouter>
    <WelcomePage />
  </BrowserRouter>);
  expect (asFragment()).toMatchSnapshot();
});

