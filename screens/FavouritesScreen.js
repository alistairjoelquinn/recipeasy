import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FavouritesScreen() {
    return (
        <View style={styles.screen}>
            <Text>The Favourites Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});