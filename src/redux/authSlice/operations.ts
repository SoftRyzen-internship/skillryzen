import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface loginPayload {
  email: string;
  password: string;
}

interface registerPayload extends loginPayload  {
  displayName?: string;
}

const register = createAsyncThunk('auth/register', async (registerData:registerPayload, thunkApi) => {
  try {
    await axios.post('auth/register', registerData, { withCredentials: true });
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

const logIn = createAsyncThunk('auth/logIn', async ({email, password}: loginPayload, thunkApi) => {
  try {
    await axios.post('auth/login', {email, password}, { withCredentials: true });

    const { data } = await axios.get('auth', { withCredentials: true } );
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await axios.post('auth/logout', { withCredentials: true });
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    await axios.post('auth/refresh', { withCredentials: true } );
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

const auth = createAsyncThunk('auth/auth', async (_, thunkApi) => {
  try {
    const { data } = await axios.get('auth', { withCredentials: true } );
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.message);
  }
});

export { register, logIn, logOut, auth, refresh };