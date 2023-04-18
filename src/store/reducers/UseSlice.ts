import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { IUser } from 'components/models/IUser';
import { IPhoto } from 'types/types';

interface IUserState {
  // users: IUser[];
  photo: IPhoto[];
  isLoading: boolean;
  error: string;
}

const initialState: IUserState = {
  // users: [],
  photo: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    useFetching(state) {
      state.isLoading = true;
    },
    useFetchingSuccess(state, action: PayloadAction<IPhoto[]>) {
      // useFetchingSuccess(state, action: PayloadAction<IPhoto[]>) {
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

export default userSlice.reducer;
