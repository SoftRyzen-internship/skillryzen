import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface Contact {
  id: string;
  name: string;
  number: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact({ contacts }, action: PayloadAction<Contact>) {
      contacts.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },

    deleteContact({ contacts }, action: PayloadAction<string>) {
      const index = contacts.findIndex(
        (contact) => contact.id === action.payload
      );
      contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
