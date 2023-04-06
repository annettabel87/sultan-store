import reducer, { IBasketState, ADD_ONE_ITEM, IBasketItem, ADD_ITEM, REMOVE_ITEM, CLEAR_BASKET } from "./basketReducer";


const mockProduct: IBasketItem = {
    id: 17,
    urlImg: "/sultan-store/image/17.png",
    title: "Туалетная бумага Papia Deluxe Paradiso Fiori",
    sizeType: "count",
    size: "8 шт",
    description: "Чтобы ощутить особую роскошь, выберите 4-х слойную туалетную бумагу Papia Deluxe Paradiso dei Fiori - с ароматом парфюма, полного жизни, радости и ритма.",
    price: 300,
    quantity: 3
  }

  const mockProduct2: IBasketItem = {
    id: 18,
    urlImg: "/sultan-store/image/18.png",
    title: "Туалетная бумага Papia Deluxe Paradiso Fiori",
    sizeType: "count",
    size: "8 шт",
    description: "Чтобы ощутить особую роскошь, выберите 4-х слойную туалетную бумагу Papia Deluxe Paradiso dei Fiori - с ароматом парфюма, полного жизни, радости и ритма.",
    price: 100,
    quantity: 1
  }

  const mockProduct3: IBasketItem = {
    id: 19,
    urlImg: "/sultan-store/image/18.png",
    title: "Туалетная бумага Papia Deluxe Paradiso Fiori",
    sizeType: "count",
    size: "8 шт",
    description: "Чтобы ощутить особую роскошь, выберите 4-х слойную туалетную бумагу Papia Deluxe Paradiso dei Fiori - с ароматом парфюма, полного жизни, радости и ритма.",
    price: 200,
    quantity: 2
  }


describe("basketReducer test", () => {
    test("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            basket: [],
            totalPrice: 0,
            countItems: 0
        })
    })

    test('should handle a product being added to an empty basket', () => {
        const previousState: IBasketState = {
            basket: [],
            totalPrice: 0,
            countItems: 0
        }

        expect(reducer(previousState, ADD_ITEM(mockProduct))).toEqual({
                basket: [mockProduct],
                totalPrice: 900,
                countItems: 1
        })
      })

      test('should handle a product being added to an existing basket', () => {
        const previousState: IBasketState = {
            basket: [mockProduct],
            totalPrice: 900,
            countItems: 1
        }

        expect(reducer(previousState, ADD_ONE_ITEM(mockProduct2))).toEqual({
                basket: [mockProduct, mockProduct2],
                totalPrice: 1000,
                countItems: 2
        })
      })

      test('should handle a product being removing to  the basket', () => {
        const previousState: IBasketState = {
            basket: [mockProduct, mockProduct2, mockProduct3],
            totalPrice: 900,
            countItems: 1
        }

        expect(reducer(previousState, REMOVE_ITEM(18))).toEqual({
                basket: [mockProduct, mockProduct3],
                totalPrice: 1300,
                countItems: 2
        })
      })

      test('should handle all products being removing from the basket', () => {
        const previousState: IBasketState = {
            basket: [mockProduct, mockProduct2, mockProduct3],
            totalPrice: 1400,
            countItems: 3
        }

        expect(reducer(previousState, CLEAR_BASKET())).toEqual({
                basket: [],
                totalPrice: 0,
                countItems: 0
        })
      })
})