import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MealList from '../components/MealList';

export default function FavouritesScreen() {
    return (
        <MealList />
    );
}

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites!'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});