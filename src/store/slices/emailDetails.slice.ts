import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emailStructure } from '../../constants/types';

interface IEmailDetailsState {
  emailDetails: emailStructure
}

const initialState: IEmailDetailsState = {
  emailDetails: {
    id: "",
    sender: "",
    receiver: "",
    subject: "",
    body: "",
    createdAt: new Date(),
    attachedFile: []
  }
};

const emailDetailsSlice = createSlice({
  name: 'emailDetails',
  initialState,
  reducers: {
    updateEmailDetailsState(state, action: PayloadAction<IEmailDetailsState>) {
      state.emailDetails = action.payload.emailDetails
    }
  },
});

export const { updateEmailDetailsState } = emailDetailsSlice.actions;
export default emailDetailsSlice.reducer;