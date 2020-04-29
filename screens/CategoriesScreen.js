import React from 'react';
import {View, Text, FlatList, 
    StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/test-data';

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })}
                style={styles.gridItem}
            >
                <View >
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});