import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import AddCost from "./AddCost";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <AddCost />
    </BrowserRouter>
  );
});
