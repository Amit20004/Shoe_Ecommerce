import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;