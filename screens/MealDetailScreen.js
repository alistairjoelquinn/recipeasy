import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { HeaderButtons } from 'react-navigation-header-buttons';

import { MEALS } from '../data/test-data';
import CustomHeaderButton from '../components/CustomHeaderButton'

export default function MealDetailScreen({ navigation }) {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button 
                title="Back Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: <HeaderButtons>
            <Item 
                title="Favourite"
                iconName="ios-star"
                onPress={() => {
                    console.log('marked as fav');
                }}
            />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});