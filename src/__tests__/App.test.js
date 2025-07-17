import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {

  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});
test("displays an image of yourself with descriptive alt text", () => {
  render(<App />);
  const img = screen.getByRole("img", { name: /photo of/i });
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph with a biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/./, { selector: "p" }); // basic check for a paragraph with some text
  expect(bioParagraph).toBeInTheDocument();
});
test("displays a link to your GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to your LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});