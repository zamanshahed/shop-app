import PRODUCTS from "../../data/dummy-data";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";

import Product from "../../models/product";

initialState = {
  availableProducts: PRODUCTS,
  userCreatedProducts: PRODUCTS.filter((product) => product.ownerId === "u1"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        //new Date().toString(),
        action.productData.id,
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      //to add the new product to the store need to return state
      return {
        ...state,
        availableProducts: state.availableProducts.concat(newProduct),
        userCreatedProducts: state.userCreatedProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userCreatedProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedProduct = new Product(
        action.pid,
        state.userCreatedProducts[productIndex].ownerId,
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userCreatedProducts[productIndex].price
      );
      const updatedUserProduct = [...state.userCreatedProducts];
      updatedUserProduct[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct; //updating both availableProducts and userCreatedProducts
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userCreatedProducts: updatedUserProduct,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userCreatedProducts: state.userCreatedProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
  }

  return state;
};
