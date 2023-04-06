import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { store } from "../../Redux/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";

describe("navigation test", () => {

    test("navigation to basket and catalog page", async () => {

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        )
        const catalogBtn = screen.getByTestId("catalog");
        expect(catalogBtn).toBeInTheDocument();
        const basketBtn = screen.getByTestId("basketBtn");
        expect(basketBtn).toBeInTheDocument();
        fireEvent.click(basketBtn);
        expect(screen.getByTestId("basketPage")).toBeInTheDocument();
        fireEvent.click(catalogBtn);
        expect(screen.getByTestId("catalogPage")).toBeInTheDocument();
    })
})
