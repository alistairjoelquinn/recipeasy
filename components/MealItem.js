import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MealItem({ itemData, onSelect }) {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelect}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <Text>{itemData.item.title}</Text>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{itemData.item.duration} minutes</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    }
});