import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { DATA_URL, FILTERSNAME, ROUTE } from './common/constants';
import { IProduct } from './Redux/catalogReducer';
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from './Redux/store';
import App from './App';

const mockData: IProduct[] = [
  {
    id: 15,
    urlImg: "/sultan-store/image/15.jpg",
    title: "Подарочный набор ",
    sizeType: "volume",
    size: "5*5 мл",
    barcode: 100048545,
    manufacturer: "Kokeshi",
    brand: "Kokeshi",
    description: "Коллекция ярких и жизнерадостных ароматов ",
    price: 100,
    groups: [FILTERSNAME.PRESENT]
  },
  {
    id: 16,
    urlImg: "/sultan-store/image/16.jpg",
    title: "Набор Tom Tailor Pure for Her Gift Set",
    sizeType: "volume",
    size: "30+100 мл",
    barcode: 110049278,
    manufacturer: "Tom Tailor",
    brand: "Tom Tailor",
    description: "Набор TOM TAILOR Pure for her туалетная вода 30 мл + гель для душа 100 мл",
    price: 200,
    groups: [FILTERSNAME.PRESENT, FILTERSNAME.BODY]
  },
  {
    id: 17,
    urlImg: "/sultan-store/image/17.png",
    title: "Туалетная бумага Papia Deluxe Paradiso Fiori",
    sizeType: "count",
    size: "8 шт",
    barcode: 110093947,
    manufacturer: "Papia",
    brand: "Papia",
    description: "Чтобы ощутить особую роскошь, выберите 4-х слойную туалетную бумагу Papia Deluxe Paradiso dei Fiori - с ароматом парфюма, полного жизни, радости и ритма.",
    price: 300,
    groups: [FILTERSNAME.HYGIENE, FILTERSNAME.PAPER]
  },
]



describe("App test", () => {
  const server = setupServer(

    rest.get(DATA_URL, (req, res, ctx) => {
      return res(
        ctx.json(mockData),
      )
    }),
  )

  beforeAll(() => {
    server.listen()
  })

  afterAll(() => {
    server.close()
  })

  test("render App", async () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getByTestId("App")).toBeInTheDocument();

  });


  test("render using mock", async () => {

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ROUTE.CATALOG]}>
          <App />
        </MemoryRouter>
      </Provider>
    )

    await waitFor(() => {
      expect(screen.getAllByTestId('card').length).toBe(3);
    });
  })
})



