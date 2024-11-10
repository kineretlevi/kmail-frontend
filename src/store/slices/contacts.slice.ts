import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { contactDetails } from '../../constants/types';

interface IContactsState {
  contacts: contactDetails[];
}

const initialState: IContactsState = {
  contacts: [],
};

// Definition of redux slice of the contacts
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateContactsState(state, action: PayloadAction<contactDetails[]>) {
      state.contacts = action.payload
    }
  },
});

export const { updateContactsState } = contactsSlice.actions;
export default contactsSlice.reducer;