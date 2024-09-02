import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 888,
    },
    reducers: {
        addNumber(state, { payload }) {
            state.counter += payload;
        },
        subNumber(state, action) {},
    },
});

export const { addNumber, subNumber } = counterSlice.actions;

export default counterSlice.reducer;
