import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { pageType } from '../../constants/types';

interface IPageState {
  page: pageType
}

const initialState: IPageState = {
  page: "All"
};

// Definition of redux slice of the page that need to be displayed.
const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePageState(state, action: PayloadAction<IPageState>) {
      state.page = action.payload.page
    }
  },
});

export const { updatePageState } = pageSlice.actions;
export default pageSlice.reducer;