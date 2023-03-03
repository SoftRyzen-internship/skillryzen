import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface Auth {
  user: {
    email: string;
    token: string;
  };
  role: string;
  step: number;
}

const initialState: Auth = {
  user: {
    email: '',
    token: '',
  },
  role: 'candidate',
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
      state.role = action.payload;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

export const { setStep, setRole } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);
