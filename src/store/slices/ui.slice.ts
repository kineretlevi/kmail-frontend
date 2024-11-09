import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUiState {
  status: string;
  title: string;
  message: string;
}

const initialState: IUiState = {
  status: "pending",
  title: "pending",
  message: "application is in pending state"
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    updateUiState(state, action: PayloadAction<IUiState>) {
        state.title = action.payload.title;
        state.status = action.payload.status;
        state.message = action.payload.message;
    }
  },
});

export const { updateUiState } = uiSlice.actions;
export default uiSlice.reducer;