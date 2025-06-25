import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contactus Page Test Cases", () => {
  test("Should load contact us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
  test("Should load button in Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Should load input in contact Component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Full Name");
    expect(input).toBeInTheDocument();
  });
  test("Should load all input in Contact Component", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(5);
  });
});
