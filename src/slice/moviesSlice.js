import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        loading: false,
        items: [],
        error: null,
        nextPage: {count: 1, hasReachedEnd: false},
        isLoadingMore: false
    },
    reducers: {
        startLoading: (state, action) => {
            state.loading = true;
        },
        listRecived: (state, action) => {
            state.items = state.items.concat(action.payload);
            state.loading = false;
            state.isLoadingMore = false;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        nextPage: (state, action) => {
            state.loading = false;
            if (!action.payload.hasReachedEnd) {
                state.nextPage.count = state.nextPage.count + action.payload.count;
            } else {
               state.nextPage = 0;
            }
        },
        startLoadingMore: (state, action) => {
            state.isLoadingMore = true
        }
    }
});

export const { startLoading, listRecived, setError, nextPage, startLoadingMore } = moviesSlice.actions;

export default moviesSlice.reducer;