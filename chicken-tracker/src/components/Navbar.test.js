import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./Navbar";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
});