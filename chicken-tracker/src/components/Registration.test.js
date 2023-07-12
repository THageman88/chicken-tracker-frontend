import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import RegistrationPage from "./Registration";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <RegistrationPage/>
    </BrowserRouter>
  );
});