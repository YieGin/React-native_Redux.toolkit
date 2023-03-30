import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice.js';
import userSlice from './userSlice.js';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: CartSlice,
  },
});

export default store;
