import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = ({ value, onChange, label }) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{label}</Text>
            <Switch 
                trackColor={{true: Colors.primary}} 
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
                value={value} 
                onValueChange={onChange}
            />
        </View>
    );
};

export default function FiltersScreen() {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    return (
        <View style={styles.screen}>
        <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label="Gluten Free" value={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label="Vegan" value={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label="Vegetarian" value={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
            <FilterSwitch label="Lactose Free" value={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
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