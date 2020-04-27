import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function MealDetailScreen() {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
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