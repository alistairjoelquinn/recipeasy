import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

export default function MealList({ displayMeals, navigation }) {
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
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title
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