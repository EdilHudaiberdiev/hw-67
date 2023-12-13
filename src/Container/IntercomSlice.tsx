import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IntercomState {
  value: string;
  password: string;
  checkComb: null | boolean;
}

const initialState: IntercomState = {
  value: "",
  password: "0000",
  checkComb: null,
};

export const IntercomSlice = createSlice({
  name: 'intercomReducer',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value += action.payload;
      state.checkComb = null;
    },
    deleteSymbol: (state) => {
      state.value = state.value.slice(0, -1);
      state.checkComb = null;
    },
    checkValue: (state) => {
      if (state.value === state.password) {
        state.checkComb = true;
      } else {
        state.checkComb = false;
      }
    },
  }
});

export const intercomReducer = IntercomSlice.reducer;
export const {
  add,
  deleteSymbol,
  checkValue,
} = IntercomSlice.actions;

