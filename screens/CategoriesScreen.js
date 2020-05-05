import React from 'react';
import { FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/test-data';
import CategoryTile from '../components/CategoryTile';
import CustomHeaderButton from '../components/CustomHeaderButton'

export default function CategoriesScreen({ navigation }) {
    const renderGridItem = itemData => {
        return (
            <CategoryTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })}
            />
        );
    };

    return (
        <FlatList 
            data={CATEGORIES} 
            numColumns={2}
            renderItem={renderGridItem}
        />
    );
};

CategoriesScreen.navigationOptions = navData => {
    return (
        { 
        headerTitle: 'Recipeasy',
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
