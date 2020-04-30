import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function MealList(props) {
    return (
        <View style={styles.screen}>
            <FlatList {...props} />
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