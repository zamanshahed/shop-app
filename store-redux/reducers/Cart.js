import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/Cart";
import CartItem from "../../models/cart-item";
import { ADD_ORDER } from "../actions/Order";

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
    case REMOVE_FROM_CART:
      const currentQty = state.items[action.pid].quantity;
      const currentPrice = state.items[action.pid].productPrice;

      let updatedCartItems;

      if (currentQty > 1) {
        const updatedCartItem = new CartItem(
          currentQty - 1,
          state.items[action.pid].productPrice,
          state.items[action.pid].productTitle,
          state.items[action.pid].totalPrice - currentPrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalPayment: state.totalPayment - currentPrice,
      };
    case ADD_ORDER:
      return initialState;
  }

  return state;
};
