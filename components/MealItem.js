import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function MealItem({ itemData, onSelect }) {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={onSelect}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                            <ImageBackground 
                                source={{uri: itemData.item.imageUrl}} 
                                style={styles.bgImage}
                            >
                                <View style={styles.titleContainer}>
                                    <Text 
                                        style={styles.title}
                                        numberOfLines={1}
                                    >   
                                        {itemData.item.title}
                                    </Text>
                                </View>
                            </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{itemData.item.duration} minutes</Text>
                        <Text>{itemData.item.complexity.toUpperCase()}</Text>
                        <Text>{itemData.item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealItem: {
        height: 200,
        width: '95%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});