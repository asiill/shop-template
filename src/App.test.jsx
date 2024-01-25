import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
    it("renders correct headin", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch(/hello world!/i);
    });
});