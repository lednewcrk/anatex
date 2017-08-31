import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default class ScrollCategory extends Component {
    render() {
        return (        
            <TouchableHighlight
                onPress={(categoryId) => this.props.onPress(categoryId)}
                underlayColor={'#129471'}
                activeOpacity={0.3}
                style={styles.button}
            >
                <Text style={styles.txt}>{this.props.description.toUpperCase()}</Text>
            </TouchableHighlight>                
        );
    }
}

//Styles
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#129471',
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginRight: 5,
        borderRadius: 20
    },
    txt: {
        color: '#FFF'
    }
});

