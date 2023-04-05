import { IProduct } from "../Redux/catalogReducer"
import { FILTERSNAME, SORTNAMES } from "./constants"
import { filterData, sort } from "./helpers"

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

describe('helper tests', () => {
    test('filter test', () => {
        expect(filterData(mockData,10, 500, ["Papia"], FILTERSNAME.PAPER)).toHaveLength(1)
    })

    test('filter test return if price too big', () => {
        expect(filterData(mockData, 500, 600, ["Papia"], FILTERSNAME.PAPER)).toHaveLength(0)
    })

    test('filter test return if price too small', () => {
        expect(filterData(mockData, 0, 50, ["Papia"], FILTERSNAME.PAPER)).toHaveLength(0)
    })

    test('filter test return if dsts don`t include manufacturer', () => {
        expect(filterData(mockData, 100, 600, ["Eveline"], FILTERSNAME.PAPER)).toHaveLength(0)
    })

    test('filter test return if dsts don`t include filtername', () => {
        expect(filterData(mockData, 100, 600, ["Eveline"], FILTERSNAME.FOOT)).toHaveLength(0)
    })
})

describe("sort test", () => {
    test('sort by title', () => {
        expect(sort(mockData, SORTNAMES.TITLE)[0].id).toBe(16)
    })

    test('sort by title reverse', () => {
        expect(sort(mockData, SORTNAMES.TITLE_REVERSE)[0].id).toBe(17)
    })

    test('sort by title price', () => {
        expect(sort(mockData, SORTNAMES.PRICE)[0].id).toBe(15)
    })

    test('sort by title price reverse', () => {
        expect(sort(mockData, SORTNAMES.PRICE)[0].id).toBe(17)
    })
})