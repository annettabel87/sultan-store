import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { SideBar } from "./SideBar";
import { createReduxStore } from "../../Redux/store";
import { Provider } from "react-redux";

describe("sideBar tests", () => {
    test("filter is working", async () => {
        const store = createReduxStore();
        const mockFilterHandler = jest.fn();
        render(
            <Provider store={store}>
                <SideBar/>
            </Provider >
        )
        const form = await  screen.findByTestId("form");
        form.onsubmit = mockFilterHandler;
        fireEvent.submit(form);
        expect(mockFilterHandler).toHaveBeenCalledTimes(1);
    })
})