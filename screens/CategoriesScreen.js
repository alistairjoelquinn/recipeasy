import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

export default function CategoriesScreen({ navigation }) {
    return (
        <FlatList numColumns={2}
        
        />
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});