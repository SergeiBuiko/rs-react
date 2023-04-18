import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPhoto } from 'types/types';

interface IUserState {
  photo: IPhoto[];
  isLoading: boolean;
  error: string;
  searchValue: string;
}

const initialState: IUserState = {
  photo: [],
  isLoading: false,
  error: '',
  searchValue: 'audi',
};

export const photoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<{ value: string }>) {
      state.searchValue = action.payload.value;
    },
    useFetching(state) {
      state.isLoading = true;
    },
    useFetchingSuccess(state, action: PayloadAction<IPhoto[]>) {
      state.isLoading = false;
      state.error = '';
      state.photo = action.payload;
    },
    useFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { setSearchValue } = photoSlice.actions;
export default photoSlice.reducer;
