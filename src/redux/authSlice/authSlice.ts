import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logIn } from './operations';

interface User {
  email: string;
  password: string;
  displayName?: string;
  role: string;
}

interface Auth {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
  isError: boolean;
  step: number;
}

const initialState: Auth = {
  user: {
    email: '',
    password: '',
    displayName: '',
    role: 'STUDENT',
  },
  isAuth: false,
  isLoading: false,
  isError: false,
  step: 1,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },

    setRole(state, action: PayloadAction<string>) {
      state.user.role = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isError = false;
        state.isAuth = true;
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
        state.user.role = action.payload.role;

      })
      .addMatcher((action) => action.type.endsWith('/pending'), (state) => {
        state.isLoading= true;
      })
      .addMatcher((action) => action.type.endsWith('/rejected'), (state) => {
        state.isLoading= false;
        state.isError = true;
      })
      .addMatcher((action) => action.type.endsWith('/fulfilled'), (state) => {
        state.isLoading= false;
        state.isError = false;
      }),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

export const { setStep, setRole } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
