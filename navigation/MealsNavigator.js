import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const favNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackOptions
});

const filterNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filters'
    },
    defaultNavigationOptions: defaultStackOptions
});

const config = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons 
                    name='ios-restaurant' 
                    size={25} 
                    color={tabInfo.tintColor}
                />;
            },
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favourites: {
        screen: favNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons 
                    name='ios-star' 
                    size={25} 
                    color={tabInfo.tintColor}
                />;
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favourites</Text> : 'Favourites'
        }
    }
};

const MealsFavTabNavigator = 
    Platform.OS === 'android' 
        ? 
            createMaterialBottomTabNavigator(config, {
                activeColor: 'white',
                shifting: true,
                barStyle: {
                    backgroundColor: Colors.primary
                }
            }) 
        : 
            createBottomTabNavigator(config, 
                {tabBarOptions: {
                    labelStyle: {
                        fontFamily: 'open-sans-bold'
                    },
                    activeTintColor: Colors.accentColor
                }});

const MainNavigator = createDrawerNavigator({
        Home: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: filterNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);