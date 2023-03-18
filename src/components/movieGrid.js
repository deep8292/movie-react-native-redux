import React from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import Movie from "./movie";

const MovieGrid = ({ movies, onEndReached }) => {

    const loadMore = () => {
        return (
            <View style={style.loadMoreContainer}>
                <ActivityIndicator />
                <Text style={{ marginLeft: 10 }}>Loading more movies...</Text>
          </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => {
                    return <Movie movieId={item.id} movie={item} />
                }}
                ListFooterComponent={loadMore}
                onEndReachedThreshold={0.5}
                onEndReached={onEndReached}
            />
        </View>
    )
}

const style = StyleSheet.create({
    loadMoreContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        justifyContent: 'center'
    }
});

export default MovieGrid;