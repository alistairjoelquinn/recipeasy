import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

import { CATEGORIES } from '../data/test-data';

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = itemData => {
        return (
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
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