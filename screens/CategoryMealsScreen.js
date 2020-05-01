import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/test-data';
import MealList from '../components/MealList';

export default function CategoryMealsScreen({ navigation }) {
    const catId = navigation.getParam('categoryId');
    const availableMeals = useSelector(state => {
        console.log('state: ', state);
        return state.meals.filteredMeals;
    });
    console.log('availableMeals: ', availableMeals);
    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <MealList 
            displayMeals={displayMeals}
            navigation={navigation}
        />
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selected = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selected.title,
    };
};