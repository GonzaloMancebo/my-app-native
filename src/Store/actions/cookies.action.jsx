import { URL_API } from "../../Firebase/Database";

export const ADD_COOKIE = "ADD_COOKIE";
export const REMOVE_COOKIE = "REMOVE_COOKIE";
export const CONFIRM_CART = "CONFIRM_CART";
export const SET_ORDERS = "SET_ORDERS";

export const addCookie = (cookie) => ({
  type: ADD_COOKIE,
  coffee,
});

export const removeCookie = (itemId) => ({
  type: REMOVE_COOKIE,
  itemId,
});

export const confirmCart = (itemsCart, totalCart) => {
  return async (dispatch) => {
    try {
      const date = new Date();
      const items = itemsCart.map((item) => ({
        ...item,
        date: date.toISOString(),
      }));
      const newOrder = {
        date: date.toISOString(),
        items,
        total: totalCart,
      };
      await fetch(URL_API, {
        method: "POST",
        body: JSON.stringify(newOrder),
      });
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setOrders = (orders) => ({
  type: SET_ORDERS,
  orders,
});
