import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import EditFlock from "./EditFlock";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <EditFlock/>
    </BrowserRouter>
  );
});