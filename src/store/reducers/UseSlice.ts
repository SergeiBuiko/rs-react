import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPhoto } from 'types/types';
// import fetchImage from './ActionCreator';
// import useFetchPhoto from './ActionCreator';
// import useFetchPhoto from './ActionCreator';
// import { fetchImage } from './ActionCreator';
// import useFetchPhoto from './ActionCreator';
// eslint-disable-next-line react-hooks/rules-of-hooks
// const { fetchImage } = useFetchPhoto();
interface IPhotoState {
  photo: IPhoto[];
  isLoading: boolean;
  error: string;
  searchValue: string;
}

const initialState: IPhotoState = {
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
  // extraReducers: {
  //   [fetchImage.fulfilled.type]: (state, action: PayloadAction<IPhoto[]>) => {
  //     state.photo = action.payload;
  //     state.isLoading = true;
  //     state.error = '';
  //   },
  //   [fetchImage.pending.type]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [fetchImage.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});
export const { setSearchValue } = photoSlice.actions;
export default photoSlice.reducer;