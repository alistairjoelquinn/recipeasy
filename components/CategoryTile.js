import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryTile({ title, onSelect }) {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
            <View >
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});