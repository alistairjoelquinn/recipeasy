import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TextDefault({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans'
    }
});