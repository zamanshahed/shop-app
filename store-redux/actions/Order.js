import Order from "../../models/order";

export const ADD_ORDER = "ADD_ORDER";
export const SET_ORDERS = "SET_ORDERS";

//load orders from firebase for specific user
export const fetchOrder = () => {
  return async (dispatch) => {
    const loadedOrders = [];
    try {
      const response = await fetch(
        "https://rn-shop-app-40f1c-default-rtdb.firebaseio.com/orders/u1.json"
      );

      if (!response.ok) {
        throw new Error("Server Response Error: Something went wrong!");
      }

      const resData = await response.json(); //async task

      for (const key in resData) {
        loadedOrders.push(
          new Order(
            key,
            resData[key].cartItems,
            resData[key].totalAmount,
            new Date(resData[key].date)
          )
        );
      }
    } catch (error) {
      throw error;
    }

    dispatch({ type: SET_ORDERS, orders: loadedOrders });
  };
};

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
