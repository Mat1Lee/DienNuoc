import { configureStore } from "@reduxjs/toolkit";
import { dienNuocReducer } from "../dataSile/DataSlice";

const store = configureStore({
  reducer:{
    dataDienNuoc: dienNuocReducer,
  }
});
export default store