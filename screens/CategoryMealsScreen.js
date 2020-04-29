import React from 'react';
import {View, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/test-data';

export default function CategoryMealsScreen({ navigation }) {
    const catId = navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <View style={styles.screen}>
            <FlatList data={displayMeals} />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});