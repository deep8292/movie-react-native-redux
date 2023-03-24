import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

const Movie = ({ movieId, movie }) => {
    return (
        <View style={styles.itemContainer}>
            {movie.primaryImage ? 
            <Image 
                style={styles.imageStyles} 
                source={ { uri: movie.primaryImage.url }}
            />: 
            <Image 
                source={require('../../assets/placeholder_image.png')}
            />
            }
            <Text style={styles.titleStyles}>{movie.titleText.text}</Text>
            <Text style={styles.dateStyle}>Realsed in {movie.releaseYear.year} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        paddingHorizontal: 2,
        paddingVertical: 4,
        alignItems:'center',
    },
    imageStyles: {
        width: '100%',
        aspectRatio: 1
    },
    titleStyles: {
        fontWeight: '600',
        fontSize: 15,
        alignSelf: 'flex-start',
        padding: 8
    },
    dateStyle: {
        alignSelf: 'flex-start',
        paddingLeft: 8
    }
});

export default Movie;