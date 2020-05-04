import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

export default function MealList({ displayMeals, navigation }) {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMeal = itemData => {
        const isFavourite = favouriteMeals.find(meal => meal.id === itemData.item.id);
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
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavourite
                        }
                    });
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList 
                data={displayMeals} 
                renderItem={renderMeal}
                style={{width: '100%'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
});