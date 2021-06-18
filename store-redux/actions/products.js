import Product from "../../models/product";

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

export const fetchProducts = () => {
  return async (dispatch) => {
    //with async it returns promise !!
    //going for async data fetch with http requests !
    const response = await fetch(
      "https://rn-shop-app-40f1c-default-rtdb.firebaseio.com/products.json",
      {
        method: "GET",
      }
    );

    const resData = await response.json(); //async task
    // console.log(resData);
    const loadedProducts = [];

    for (const key in resData) {
      loadedProducts.push(
        new Product(
          key,
          "u1",
          resData[key].title,
          resData[key].imageUrl,
          resData[key].description,
          resData[key].price
        )
      );
    }

    dispatch({ type: SET_PRODUCT, products: loadedProducts });
  };
};

export const DeleteProduct = (prodId) => {
  return { type: DELETE_PRODUCT, pid: prodId };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async (dispatch) => {
    //with async it returns promise !!
    //going for async data fetch with http requests !
    const response = await fetch(
      "https://rn-shop-app-40f1c-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          // firebase itself will generate id for us
          title,
          description,
          imageUrl,
          price,
        }),
      }
    );

    const resData = await response.json(); //async task

    //console.log(resData);

    dispatch({
      id: resData.name,
      type: CREATE_PRODUCT,
      productData: {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
      },
    });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title: title,
      description: description,
      imageUrl: imageUrl,
    },
  };
};
