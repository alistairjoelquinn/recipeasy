import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/test-data';

export default function CategoryMealsScreen({ navigation }) {
    const catId = navigation.getParam('categoryId');
    const selected = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>{selected.title}</Text>
            <Button 
                title="Go To Meal Detail"
                onPress={() => navigation.navigate('MealDetail')}
            />
            <Button 
                title="Go Back"
                onPress={() => navigation.goBack()}
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