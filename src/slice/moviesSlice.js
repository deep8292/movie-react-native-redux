import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        loading: false,
        items: [],
        error: null,
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true;
        },
        listRecived: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {startLoading, listRecived, setError } = moviesSlice.actions;

export default moviesSlice.reducer;