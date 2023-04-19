import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormValues } from 'types/types';

interface FormPageSliceInterface {
  cards: FormValues[];
}

const initialState: FormPageSliceInterface = {
  cards: [],
};

export const formPageSlice = createSlice({
  name: 'formPageSlice',
  initialState,
  reducers: {
    pushFormData(state, action: PayloadAction<{ value: FormValues }>) {
      state.cards.push(action.payload.value);
    },
  },
});

export const { pushFormData } = formPageSlice.actions;

export default formPageSlice.reducer;
