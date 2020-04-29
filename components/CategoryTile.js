import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CategoryTile({ title, onSelect, color }) {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
            <View style={{ ...styles.container , ...{backgroundColor: color} }}>
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
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});