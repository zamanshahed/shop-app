import { ADD_TO_CART } from "../actions/Cart";
import CartItem from "../../models/cart-item";

const initialState = {
  items: {},
  totalPayment: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        //product inside cart already!
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].totalPrice + prodPrice
        );
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalPayment: state.totalPayment + prodPrice,
        };
      } else {
        //adding product first time
        const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: newCartItem },
          totalPayment: state.totalPayment + prodPrice,
        };
      }
  }

  return state;
};
