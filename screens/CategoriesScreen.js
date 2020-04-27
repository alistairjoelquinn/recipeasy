import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function CategoriesScreen({ navigation }) {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button 
                title="Go To Meals"
                onPress={() => navigation.navigate('CategoryMeals')}
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