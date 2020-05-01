import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton'

export default function FavouritesScreen({ navigation }) {
    const favMeals = useSelector(state => state.meals.favouriteMeals);

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