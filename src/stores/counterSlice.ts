import { createSlice } from  '@reduxjs/toolkit';

type CounterState = {
  value: number,
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: CounterState) => { state.value += 1 },
    decrement: (state: CounterState) => { state.value -= 1 },
    clear: (state: CounterState) => { state.value = 0 },
  },
});

export const { increment, decrement, clear } = counterSlice.actions;
export default counterSlice.reducer;
