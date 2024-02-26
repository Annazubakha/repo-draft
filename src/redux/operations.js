import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://65d4ec553f1ab8c6343647bb.mockapi.io/',
});

export const fetchUsersThunk = createAsyncThunk(
  'users',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('users');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
