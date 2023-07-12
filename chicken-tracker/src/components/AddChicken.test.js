import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import AddChicken from "./AddChicken";

it("renders without crashing", function() {
  render(
    <BrowserRouter>
      <AddChicken />
    </BrowserRouter>
  );
});

it("runs the create function on form submit", function() {
  const createMock = jest.fn();
  const { getByText } = render(<AddChicken createTodo={createMock} />);
  const createButton = getByText("Add Chicken");
  fireEvent.click(createButton);
  expect(createMock).toHaveBeenCalled();
});
