import { render, screen } from "@testing-library/react";
import { it, expect, beforeAll } from "vitest";
import Home from "@/app/page";

beforeAll(() => {
    render(<Home />);
});

it("should render title on home page", () => {
    const title = "Color Palette Generator";
    const titleElem = screen.getByRole("heading", { level: 1, name: title });
    expect(titleElem).toBeDefined();
});
