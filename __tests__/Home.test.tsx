import { render, screen } from "@testing-library/react/pure";
import { test, expect, beforeAll, describe } from "vitest";
import Home from "@/app/page";

describe("app renders correctly", () => {
    beforeAll(() => {
        render(<Home />);
    });

    test("app title renders on home page", () => {
        const title = "Color Palette Generator";
        const titleElem = screen.getByRole("heading", { level: 1, name: title });
        expect(titleElem).toBeInTheDocument();
    });

    test("user input box renders on home page", () => {
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
    });

    test("generate button renders on home page", () => {
        const generateButton = screen.getByRole("button");
        expect(generateButton).toBeInTheDocument();
    });

    // TODO - verify there are five color divs
    // TODO - verify clicking one of the color divs copies the hex code to clipboard
});
