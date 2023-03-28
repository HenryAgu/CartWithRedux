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
    },
    increaseQuantity: (state,action)=>{
        // To increase Quantity of item
        state.value = action.payload.id++
    }
  },
});

export const {addItem,deleteItem,increaseQuantity } = itemSlice.actions
export default itemSlice.reducer;
