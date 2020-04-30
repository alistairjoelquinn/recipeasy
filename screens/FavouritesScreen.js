import React from 'react';

import { MEALS } from '../data/test-data';
import MealList from '../components/MealList';

export default function FavouritesScreen({ navigation }) {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList 
            displayMeals={favMeals}
            navigation={navigation}
        />
    );
}

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites!'
};
