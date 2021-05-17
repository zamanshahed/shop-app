import PRODUCTS from "../../data/dummy-data";

initialState = {
  availableProducts: PRODUCTS,
  userCreatedProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

export default (state = initialState, actions) => {
  return state;
};
