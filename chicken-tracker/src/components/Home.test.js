import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import HomePage from "./Home";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
  );
});