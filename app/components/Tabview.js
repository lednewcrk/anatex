import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import ScrollCategories from './ScrollCategories.js';
import ItemsList from './ItemsList.js';
import Feed from './Feed.js';

export default class Tabview extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: '1', title: 'FEED' },
        { key: '2', title: 'MENSAGENS' },
      ],
    };    
  }  

  componentWillReceiveProps(nextProps) {
    this.setState({
        categories: nextProps.categories
    });    
  }
  
  FirstRoute = () => <Feed />;

  SecondRoute = () => <View style={[styles.container, { backgroundColor: '#FFF' }]} />;

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar tabStyle={{ backgroundColor: '#129471' }} {...props} />;

  _renderScene = SceneMap({
    '1': this.FirstRoute,
    '2': this.SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        tabStyle={{ backgroundColor: '#129471' }}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
