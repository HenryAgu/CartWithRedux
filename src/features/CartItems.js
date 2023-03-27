import { createSlice } from "@reduxjs/toolkit";

// Item json
import { ItemDetail } from "../ItemData";

export const itemSlice = createSlice({
  name: "items",
  initialState: { value: ItemDetail },
  reducers: {
    addItem: (state, action) => {
      // To add an item to the cart
    },
  },
});

export default itemSlice.reducer;
