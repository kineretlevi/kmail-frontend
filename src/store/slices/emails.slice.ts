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
      state.receivedEmails = action.payload.receivedEmails
      action.payload.sentEmails = action.payload.sentEmails
    },
  },
});

export const { updateAllEmails } = emailsSlice.actions;
export default emailsSlice.reducer;