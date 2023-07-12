import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import CostPage from "./Cost";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <CostPage />
    </BrowserRouter>
  );
});
