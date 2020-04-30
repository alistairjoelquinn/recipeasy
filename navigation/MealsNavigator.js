import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
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
            tabBarColor: Colors.primary
        }
    },
    Favourites: {
        screen: FavouritesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons 
                    name='ios-star' 
                    size={25} 
                    color={tabInfo.tintColor}
                />;
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = 
    Platform.OS === 'android' 
        ? 
            createMaterialBottomTabNavigator(config, {
                activeColor: Colors.accentColor,
                shifting: true
            }) 
        : 
            createBottomTabNavigator(config, 
                {tabBarOptions: {
                    activeTintColor: Colors.accentColor
                }});

export default createAppContainer(MealsFavTabNavigator);