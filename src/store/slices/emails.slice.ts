import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emailStructure } from '../../constants/types';

interface IEmailsState {
  emails: emailStructure[];
}

const initialState: IEmailsState = {
  emails: [],
};

const emailsSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {
  },
});

export const {  } = emailsSlice.actions;
export default emailsSlice.reducer;