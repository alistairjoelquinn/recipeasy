import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function MealDetailScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>The Meal Detail Screen</Text>
            <Button 
                title="Back Home"
                onPress={() => navigation.popToTop()}
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