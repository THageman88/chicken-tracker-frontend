import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import LoginPage from "./Login";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <LoginPage/>
    </BrowserRouter>
  );
});