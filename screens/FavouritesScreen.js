import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';
import TextDefault from '../components/TextDefault';

export default function FavouritesScreen({ navigation }) {
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if(favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <TextDefault>No Favourites So Far! Start Adding Some...</TextDefault>
        </View>
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});