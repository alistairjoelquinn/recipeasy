import React from 'react';
import {View, FlatList, Text, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/test-data';
import MealItem from '../components/MealItem';

export default function CategoryMealsScreen({ navigation }) {
    const catId = navigation.getParam('categoryId');
    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    const renderMeal = itemData => {
        return (
            <MealItem 
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelect={() => {
                    navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayMeals} 
                renderItem={renderMeal}
                style={{width: '100%'}}
            />
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