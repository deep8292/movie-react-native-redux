import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Movie from "./movie";

const MovieGrid = ({ movies }) => {
    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={movies}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return <Movie movie={item}/>
                }}
            />
        </View>
    )
}

export default MovieGrid;