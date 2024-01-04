import { render, screen } from "@testing-library/react";
import { test, expect, beforeEach, describe } from "vitest";
import Home from "@/app/page";

describe("app renders correctly", () => {
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

    // TODO - verify clicking one of the color divs copies the hex code to clipboard
});
