import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {
  logIn,
  auth,
  logOut,
  createCompany,
  getCompanyByToken,
} from './operations';

interface User {
  email: string;
  displayName?: string;
  registrationInvitationToken: string;
  role: string;
}

interface Company {
  id: string;
  companyName: string;
  isActive: boolean;
}

interface Auth {
  user: User;
  company: Company;
  isAuth: boolean;
  isClickLogOut: boolean;
  isLoading: boolean;
  isError: boolean;
  step: number;
}

const initialState: Auth = {
  user: {
    email: '',
    displayName: '',
    registrationInvitationToken: '',
    role: 'CANDIDATE',
  },
  company: {
    id: '',
    companyName: '',
    isActive: false,
  },
  isAuth: false,
  isClickLogOut: false,
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
    setClickLogOut(state, { payload }: PayloadAction<boolean>) {
      state.isClickLogOut = payload;
    },
    setRole(state, action: PayloadAction<string>) {
      state.user.role = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.user.registrationInvitationToken = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.user.displayName = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, state => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(auth.fulfilled, (state, action: PayloadAction<User>) => {
        state.user.email = action.payload.email;
        state.user.role = action.payload.role;
        state.isAuth = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.isAuth = false;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.isAuth = false;
      })
      .addCase(
        createCompany.fulfilled,
        (state, action: PayloadAction<Company>) => {
          state.company.companyName = action.payload.companyName;
          state.company.id = action.payload.id;
          state.company.isActive = action.payload.isActive;
        }
      )
      .addCase(
        getCompanyByToken.fulfilled,
        (state, action: PayloadAction<Company>) => {
          state.company = action.payload;
        }
      )
      .addCase(getCompanyByToken.rejected, state => {
        state.company = initialState.company;
      })
      .addMatcher(
        action =>
          action.type.startsWith('/auth') &&
          action.type.endsWith.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('/auth') && action.type.endsWith('/rejected'),
        state => {
          state.isAuth = false;
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('/auth') && action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.isError = false;
        }
      ),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuth'],
};

export const { setStep, setClickLogOut, setRole, setToken, setName } =
  authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
