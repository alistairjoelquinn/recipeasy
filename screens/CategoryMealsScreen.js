import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';

import { CATEGORIES } from '../data/test-data';
import Colors from '../constants/Colors';

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
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});