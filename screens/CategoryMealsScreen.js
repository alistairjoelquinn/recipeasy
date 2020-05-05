import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/test-data';
import MealList from '../components/MealList';
import TextDefault from '../components/TextDefault';

export default function CategoryMealsScreen({ navigation }) {
    const catId = navigation.getParam('categoryId');
    const availableMeals = useSelector(state => {
        return state.meals.filteredMeals;
    });
    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if(displayMeals.length === 0) {
        return (
            <View style={styles.content}>
                <TextDefault>
                    No meals found, try changing your filters!
                </TextDefault>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});