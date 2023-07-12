import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import FlockPage from "./Flock";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <FlockPage/>
    </BrowserRouter>
  );
});