export const ADD_ORDER = "ADD_ORDER";

export const addOrder = (cartItems, totalAmount) => {
  return async (dispatch) => {
    const date = new Date();
    const response = await fetch(
      "https://rn-shop-app-40f1c-default-rtdb.firebaseio.com/orders/u1.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          totalAmount,
          date: date.toISOString(),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("something went wrong, Response not ok");
    }

    const resData = await response.json(); //async task

    dispatch({
      type: ADD_ORDER,
      orderData: {
        id: resData.name,
        item: cartItems,
        amount: totalAmount,
        date: date,
      },
    });
  };
};
