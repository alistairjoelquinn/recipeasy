import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function CategoryMealsScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen</Text>
            <Button 
                title="Go To Meal Detail"
                onPress={() => navigation.navigate('MealDetail')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});