import React, {useEffect} from "react";
import {View, 
        Text,
        ActivityIndicator,
        StyleSheet}
from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "../api/fetchMovies";
import MovieGrid from "../components/movieGrid";

const MovieList = () => {
    const dispatch = useDispatch();
    const movieState = useSelector((state) => state.movieList);
    const { loading, items, error, nextPage, isLoadingMore } = movieState;

    useEffect(() => {
        dispatch(fetchMovieList());
    }, [dispatch]);

    const handleEndReached = () => {
        if (!isLoadingMore || !loading) {
            dispatch(fetchMovieList(true, nextPage.count));    
        }
    }

    return (
        <View style={style.containerStyles}>
            {loading ? (
                <ActivityIndicator />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <MovieGrid movies={items} onEndReached={handleEndReached}/>
                )
            }
        </View>
    );
}

const style = StyleSheet.create({
    containerStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default MovieList;