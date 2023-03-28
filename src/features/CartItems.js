import { createSlice } from "@reduxjs/toolkit";
import items from "../components/Items";

// Item json
import { ItemDetail } from "../ItemData";

export const itemSlice = createSlice({
  name: "items",
  initialState: { value: ItemDetail },
  reducers: {
    addItem: (state, action) => {
      // To add an item to the cart
      state.value.push(action.payload)
    },
    deleteItem: (state,action) =>{
        // To delete an item from the cart
        state.value = state.value.filter((item)=>
            item.id !== action.payload.id
        )
    }
  },
});

export const {addItem,deleteItem } = itemSlice.actions
export default itemSlice.reducer;
