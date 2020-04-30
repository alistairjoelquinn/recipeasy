import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

export default function CategoryTile({ title, onSelect, color }) {
    let TouchableBox = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableBox = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableBox style={{flex: 1}} onPress={onSelect}>
                <View style={{ ...styles.container , ...{backgroundColor: color} }}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
            </TouchableBox>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'right'
    }
});