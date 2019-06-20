import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },

    text: {
        fontSize: 60,
        color: '#fff',
    },
});

export default props => 
    <View style={styles.container}>
        <Text style={styles.text}
        numberOfLines={1}>{props.label}</Text>
    </View>;

