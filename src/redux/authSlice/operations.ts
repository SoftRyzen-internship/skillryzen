import { axiosInstance } from 'services/axiosConfig';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface loginPayload {
  email: string;
  password: string;
}

interface companyName {
  companyName: string;
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
// FIXME: old version
// const logIn = createAsyncThunk(
//   'auth/logIn',
//   async ({ email, password }: loginPayload, thunkApi) => {
//     try {
//       await axiosInstance.post('auth/login', { email, password });
//     } catch (err) {
//       return thunkApi.rejectWithValue(err.response);
//     }
//   }
// );

const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }: loginPayload, thunkApi) => {
    try {
      const resp = await fetch(
        'https://skillryzen-be-develop-f651354abd9a.herokuapp.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );

      console.log('resp', resp);

      if (resp.ok) {
        const data = await resp.json(); // Получаем содержимое тела ответа
        const authCookie = resp.headers.get('Set-Cookie')?.split(';')[0]; // Извлекаем куку "Authentication"
        const refreshCookie = resp.headers.get('Set-Cookie')?.split(';')[1]; // Извлекаем куку "Refresh"

        // Выводим содержимое кукисов и тела ответа
        console.log('Authentication cookie:', authCookie);
        console.log('Refresh cookie:', refreshCookie);
        console.log('Response body:', data);

        // Возвращаем данные из тела ответа
        return data;
      } else {
        // Возвращаем данные об ошибке
        return thunkApi.rejectWithValue(await resp.json());
      }
    } catch (err) {
      return thunkApi.rejectWithValue(err);
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

const checkCompanyName = createAsyncThunk(
  'auth/checkCompanyName',
  async (companyName: companyName, thunkApi) => {
    try {
      const { data } = await axiosInstance.get(
        'company/is-company-name-available',
        { params: companyName }
      );
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const createCompany = createAsyncThunk(
  'auth/createCompany',
  async (companyName: companyName, thunkApi) => {
    try {
      const { data } = await axiosInstance.post('company/create', companyName);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

const getCompanyByToken = createAsyncThunk(
  'company/get-by-token',
  async (token: string, thunkApi) => {
    try {
      const { data } = await axiosInstance.get('company/get-by-token', {
        params: { token: token },
      });
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response);
    }
  }
);

export {
  register,
  logIn,
  logOut,
  auth,
  refresh,
  checkCompanyName,
  createCompany,
  getCompanyByToken,
};
