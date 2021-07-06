import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const { data } = await axios.post(
        'api/v1/auth/login',
        { email, password },
        config
      );
      console.log('data', data);

      return data;
    } catch (e) {
      console.log('ERROR', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  user: {},
  loading: false,
  success: false,
  error: false,
  errorMessage: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.error = false;
      state.success = false;
      state.loading = false;
      return state;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log('payload', payload);
      state.loading = false;
      state.success = false;
      state.error = true;
      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
  },
});

export const { logOut } = slice.actions;

export default slice.reducer;
