import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import EditCost from "./EditCost";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <EditCost/>
    </BrowserRouter>
  );
});