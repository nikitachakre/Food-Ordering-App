import { configureStore } from "@reduxjs/toolkit";  // creating the store is just redux thing that is why importing from redux toolkit
import cartReducer from"./cartSlice"

const appStore = configureStore({
    reducer : {
      cart: cartReducer,
    },
});

export default appStore;