import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from '../slice/moviesSlice';

const store = configureStore({
    reducer: {
        movieList: movieListReducer
    }
});

export default store;