import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

export default function FiltersScreen() {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <View style={styles.filterContainer}>
                <Text>Gluten Free</Text>
                <Switch 
                    trackColor={{true: Colors.primary}} 
                    thumbColor={Colors.primary}
                    value={isGlutenFree} 
                    onValueChange={setIsGlutenFree}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegan</Text>
                <Switch 
                    thumbColor={Colors.primary} 
                    trackColor={{true: Colors.primary}} 
                    value={isVegan} 
                    onValueChange={setIsVegan}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegetarian</Text>
                <Switch 
                    thumbColor={Colors.primary} 
                    trackColor={{true: Colors.primary}} 
                    value={isVegetarian} 
                    onValueChange={setIsVegetarian}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Lactose Free</Text>
                <Switch 
                    thumbColor={Colors.primary} 
                    trackColor={{true: Colors.primary}} 
                    value={isLactoseFree} 
                    onValueChange={setIsLactoseFree}
                />
            </View>
        </View>
    );
}

FiltersScreen.navigationOptions = navData => {
    return (
        { 
        headerTitle: 'Filter Meals',
        headerLeft: 
        () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} 
                />
            </HeaderButtons> 
        }
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});