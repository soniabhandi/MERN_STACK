import React from "react";
import Contact from '../contact/Contact'
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Contact form renders successfully", () => {
  const { getByTestId } = render(<Contact />);
  const headerEl = getByTestId("header");
  console.log("Contact Page Check", headerEl.textContent);
  expect(headerEl.textContent).toBe("Contact Component");
});

test("Name is validated", () => {
  const { getByTestId } = render(<Contact />);
  const namecheck = getByTestId("name_checker");
  console.log("Name_check", namecheck.textContent);
  expect(namecheck.textContent).toBe("Send");
});