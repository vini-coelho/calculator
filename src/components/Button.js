import React from 'react';

import { TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';

export default props => {

    const styleButton = [styles.buttonText]
    if (props.double) styleButton.push(styles.double)
    if (props.triple) styleButton.push(styles.triple)
    if (props.operation) styleButton.push(styles.operation)

    return (
        <TouchableHighlight onPress = {() => props.onClick(props.label)}>
            <Text style = {styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 40,
        width: Dimensions.get('window').width/4,
        height: Dimensions.get('window').width/4,
        padding: 20,
        borderWidth: 1,
        backgroundColor: '#f0f0f0',
        borderColor: '#888',
        textAlign: 'center',
    },

    operation: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },

    triple: {
        width: (Dimensions.get('window').width/4)*3
    },

    double: {
        width: (Dimensions.get('window').width/4)*2
    },

})
