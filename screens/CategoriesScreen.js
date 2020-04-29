import React from 'react';
import {View, Text, FlatList, 
    StyleSheet, TouchableOpacity, Platform} from 'react-native';

import { CATEGORIES } from '../data/test-data';
import Colors from '../constants/Colors';

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('CategoryMeals')}
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

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