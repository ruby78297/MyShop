import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstant";
import { json } from "react-router-dom";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", json.stringfy(getState().cart.cartItems));
};
