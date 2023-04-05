import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { SearchBlock } from "./SearchBlock";
import { createReduxStore } from "../../Redux/store";
import { Provider } from "react-redux";

const mockData = ["Papia", "ARAVIA", "Splat"]
describe("testing SearchBlock", () => {

    test("rendering SearchBlock", () => {
        const store = createReduxStore();

        render(
            <Provider store={store}>
                <SearchBlock manufacturers={mockData}/>
            </Provider >
        )
            const searchElement = screen.getByTestId("searchBlock")
        expect(searchElement).toBeInTheDocument()
    })

    test("onChange work", () => {
        const store = createReduxStore();

        render(
            <Provider store={store}>
                <SearchBlock manufacturers={mockData}/>
            </Provider >
        )
        fireEvent.change(screen.getByPlaceholderText("Поиск..."), {
            target: {value: "aravia"}
        })
        expect(screen.getByPlaceholderText("Поиск...")).toContainHTML("aravia");
    })

    test("onChange search checkbox", async () => {
        const store = createReduxStore();
        render(
            <Provider store={store}>
                <SearchBlock manufacturers={mockData}/>
            </Provider >
        )

        const input = screen.getByPlaceholderText("Поиск...");
        const checkbox = screen.getAllByRole("checkbox");
        expect(checkbox).toHaveLength(3);
        fireEvent.change(screen.getByPlaceholderText("Поиск..."), {
            target: {value: "ara"}
        })
        expect(input).toContainHTML("ara");
        const newCheckbox  = await screen.findAllByRole("checkbox")
       expect(newCheckbox).toHaveLength(1);
    })
})