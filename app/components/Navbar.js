import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

//Images
const logo = require('../src/imgs/logo.png');
const leftArrow = require('../src/imgs/left_arrow.png');

export default class NavigationBar extends Component {
    render() {
        if (this.props.arrowIsVisibility) {
            return (
                <View style={styles.navbar}>
                    <TouchableHighlight
                        onPress={() => this.props.onPress()}
                    >
                        <Image style={styles.leftArrow} source={leftArrow} />
                    </TouchableHighlight>
                    
                    <Image style={styles.logo} source={logo} />
                </View>
            );    
        }
        return (
            <View style={styles.navbar}>
                <Image style={styles.logo} source={logo} />
            </View>
        );
    }
}

//Styles
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#129471',
    padding: 10,
    flexDirection: 'row'
  },
  logo: {
    width: 130,
    height: 34
  },
  leftArrow: {
      width: 20,
      height: 20,
      marginTop: 8,
      marginRight: 40
  }
});

