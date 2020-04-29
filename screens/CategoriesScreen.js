import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/test-data';
import CategoryTile from '../components/CategoryTile';

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = itemData => {
        return (
            <CategoryTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })}
            />
        );
    };

    return (
        <FlatList 
            data={CATEGORIES} 
            numColumns={2}
            renderItem={renderGridItem}
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});