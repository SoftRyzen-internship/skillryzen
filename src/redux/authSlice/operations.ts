import { axiosInstance } from 'services/axiosConfig';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface loginPayload {
  email: string;
  password: string;
}

interface registerPayload extends loginPayload {
  role: string;
  registrationInvitationToken: string;
  displayName?: string;
}

const register = createAsyncThunk(
  'auth/register',
  async (registerData: registerPayload, thunkApi) => {
    try {
      await axiosInstance.post('auth/register', registerData);
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }: loginPayload, thunkApi) => {
    try {
      await axiosInstance.post('auth/login', { email, password });
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await axiosInstance.post('auth/logout');
  } catch (err) {
    return thunkApi.rejectWithValue(err.response);
  }
});

const refresh = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  try {
    await axiosInstance.post('auth/refresh');
  } catch (err) {
    return thunkApi.rejectWithValue(err.response);
  }
});

const auth = createAsyncThunk('auth/auth', async (_, thunkApi) => {
  try {
    const { data } = await axiosInstance.get('auth');
    return data;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response);
  }
});

export { register, logIn, logOut, auth, refresh };
