import network from "./network";
import { API_END_POINTS } from "../config"; 
import { listRecived, setError, startLoading, nextPage, startLoadingMore } from "../slice/moviesSlice";

export const fetchMovieList = (isLoadingMore = false, page = 1) => async (dispatch) => {
    isLoadingMore ? dispatch(startLoadingMore) : dispatch(startLoading());
    try {
        const response = await network.get(`${API_END_POINTS.titles}`, {
            params: {
                limit: 20,
                year: 2020,
                list: 'most_pop_movies',
                page
            }
        });
        const data = await response.data;
        const nextPageData = data.next;
        if (nextPageData != null) {
            dispatch(nextPage({count: 1, hasReachedEnd: false}));
        } else {
            dispatch(nextPage({count: 0, hasReachedEnd: true }));
        }
        dispatch(listRecived(data.results));
    } catch (error) {
        console.log('error', error);
        dispatch(setError(error));
    }
};


