import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { logIn, auth, logOut } from './operations';

interface User {
  email: string;
  displayName?: string;
  role: string;
}

interface Auth {
  user: User;
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  step: number;
}

const initialState: Auth = {
  user: {
    email: '',
    displayName: '',
    role: 'STUDENT',
  },
  isLoggedIn: false,
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
  extraReducers: (builder) =>
    builder
      .addCase(logIn.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
      })
      .addCase(auth.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.email = action.payload.email;
        state.user.role = action.payload.role;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isLoggedIn = false;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.isLoggedIn = false;
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isLoading = false;
          state.isError = false;
        }
      ),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isLoggedIn'],
};

export const { setStep, setRole } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
