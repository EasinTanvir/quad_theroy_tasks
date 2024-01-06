import { configureStore } from "@reduxjs/toolkit";
import { ItemReducer } from "./reducers/ItemReducer";
import { errorReducer } from "./reducers/errorReducer";
export const store = configureStore({
  reducer: {
    foodlist: ItemReducer,
    errors: errorReducer,
  },
});
