import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FiltersScreen() {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen</Text>
        </View>
    );
}

FiltersScreen.navigationOptions = {
    headerTitle: 'Filtered Meals'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});