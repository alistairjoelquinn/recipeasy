import React, { useEffect } from 'react';
import { ScrollView, View, Text, Button, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton'
import TextDefault from '../components/TextDefault';

const ListItem = ({ children }) => {
    return <View style={styles.listItem}>
        <TextDefault>{children}</TextDefault>
    </View>;
};

export default function MealDetailScreen({ navigation }) {
    const meals = useSelector(state => state.meals.meals);
    const mealId = navigation.getParam('mealId');
    const selectedMeal = meals.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <TextDefault>{selectedMeal.duration} minutes</TextDefault>
                <TextDefault>{selectedMeal.complexity.toUpperCase()}</TextDefault>
                <TextDefault>{selectedMeal.affordability.toUpperCase()}</TextDefault>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => 
                <ListItem key={ingredient}>{ingredient}</ListItem>
            )}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => 
                <ListItem key={step}>{step}</ListItem>
            )}
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    return {
        headerTitle: mealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item 
                title="Favourite"
                iconName="ios-star"
                onPress={() => {
                    console.log('marked as fav');
                }}
            />
        </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    title : {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});