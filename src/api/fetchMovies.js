import network from "./network";
import { API_END_POINTS } from "../config"; 
import { listRecived, setError, startLoading } from "../slice/moviesSlice";

export const fetchMovieList = () => async (dispatch) => {
    console.log('Starting to fetch Movies');
    dispatch(startLoading());
    try {
        const response = await network.get(`${API_END_POINTS.titles}`, {
            params: {
                limit: 50,
            }
        });
        const data = await response.data;
        const nextPage = data.next;
        // console.log('results', data.results);
        dispatch(listRecived(data.results));
        // console.log('Next Page', nextPage);
        
    } catch (error) {
        dispatch(setError(error));
    }
};


