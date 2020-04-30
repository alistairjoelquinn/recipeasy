import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/test-data';
import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton'

export default function FavouritesScreen({ navigation }) {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

    return (
        <MealList 
            displayMeals={favMeals}
            navigation={navigation}
        />
    );
}

FavouritesScreen.navigationOptions = navData => {
    return (
        { 
        headerTitle: 'Your Favourites!',
        headerLeft: 
        () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} 
                />
            </HeaderButtons> 
        }
    );
};