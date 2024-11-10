import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emailStructure } from '../../constants/types';

export interface IEmailsState {
  allEmails: emailStructure[];
  sentEmails: emailStructure[];
  receivedEmails: emailStructure[];
}

const initialState: IEmailsState = {
  allEmails: [],
  sentEmails: [],
  receivedEmails: []
};

const emailsSlice = createSlice({
  name: 'emails',
  initialState,
   reducers: {
    updateAllEmails(state, action: PayloadAction<IEmailsState>) {
      state.allEmails = action.payload.allEmails
      state.sentEmails = action.payload.sentEmails
      state.receivedEmails = action.payload.receivedEmails
    },
  },
});

export const { updateAllEmails } = emailsSlice.actions;
export default emailsSlice.reducer;