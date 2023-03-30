import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('Data/data', async () => {
  return axios.get('https://fakestoreapi.com/products').then(res => {
    return res.data;
  });
});

export const userSlice = createSlice({
  name: 'getUsers',
  initialState: {
    title: [],
  },
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.title = action.payload;
    },
  },
});

export default userSlice.reducer;
