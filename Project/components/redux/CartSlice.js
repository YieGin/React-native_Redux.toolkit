import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  initialState: [],
  name: 'cartSlice',
  reducers: {
    addToCart: (state, action) => {
      const findProuduc = state.find(
        prouduct => prouduct.id === action.payload.id,
      );
      if (findProuduc) {
        findProuduc.quantity += 1;
      } else {
        const productClone = {...action.payload, quantity: 1};
        state.push(productClone);
      }
    },
    less: (state, action) => {
      const findProduct = state.find(item => item.id === action.payload.id);

      if (findProduct) {
        findProduct.quantity -= 1;
      } else {
        const productClone2 = {...action.payload, quantity: 1};
        state.push(productClone2);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter(product => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const {addToCart, deleteFromCart, clear, less} = CartSlice.actions;

export default CartSlice.reducer;
