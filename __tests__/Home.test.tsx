import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { test, expect, beforeEach } from "vitest";
import Home from "@/app/page";

beforeEach(() => {
    render(<Home />);
});

test("app title renders on home page", () => {
    const title = "Color Palette Generator";
    const titleElem = screen.getByRole("heading", { name: /color palette generator/i });
    expect(titleElem).toBeInTheDocument();
});

test("user input box renders on home page", () => {
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
});

test("generate button renders on home page", () => {
    const generateButton = screen.getByRole("button", { name: /generate/i });
    expect(generateButton).toBeInTheDocument();
});

test("verify there are five color divs", () => {
    const colorHeadings = screen.getAllByRole("heading", { level: 3 });
    expect(colorHeadings).toHaveLength(5);
});

test("input box should have focus if user presses tab on first load", async () => {
    user.setup();

    const inputBox = screen.getByRole("textbox");
    await user.tab();
    expect(inputBox).toHaveFocus();
});

test("should copy text to clipboard", async () => {
    user.setup();

    // TODO - mock window.navigator.clipboard.write and assert it is called with div color when div clicked
});
