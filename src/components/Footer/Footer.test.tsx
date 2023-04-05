import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Footer } from "./Footer";

describe("footer test", () => {

    test("rendering footer", () => {
        render(<Footer/>);
        const footerElement  = screen.getByTestId('footer');
        expect(footerElement).toBeInTheDocument();

    })
})