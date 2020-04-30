import React from 'react';

import { MEALS } from '../data/test-data';
import MealList from '../components/MealList';

export default function FavouritesScreen() {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList 
            displayMeals={favMeals}
        />
    );
}

FavouritesScreen.navigationOptions = {
    headerTitle: 'Your Favourites!'
};
