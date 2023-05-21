import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productsListReducer,
  productDetailsReducer,
} from "./reducer/productReducers";
import { cartReducer } from "./reducer/cartReducer";

const reducer = combineReducers({
  productList: productsListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// const initialState = {
//   cart: { cartItems: cartItemsFromStorage },
// };

let cartItemsFromStorage = [];
try {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItemsFromStorage = JSON.parse(storedCartItems);
  }
} catch (error) {
  // Handle the error appropriately
  console.error("Error parsing cartItems from localStorage:", error);
  // You can choose to set a default value or handle the error in a different way
  // cartItemsFromStorage = []; // Set a default value
}

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
