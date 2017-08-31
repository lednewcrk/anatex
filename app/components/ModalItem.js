import React, { Component } from 'react';
import { Modal, View, StyleSheet, Text, TouchableHighlight, WebView, Linking } from 'react-native';

import Navbar from './Navbar.js';  
import ExplosionHeartIcon from './ExplosionHeartIcon.js';


export default class ModalItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: this.props.modalIsVisibly,
      item: []
    };
  }  

  componentDidMount() {
    console.log('Did');
    console.log(this.state.item);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      modalVisible: nextProps.modalIsVisibly,
      item: nextProps.item
    });
  }

  getButtonForLink(link) {
    if (link !== '') {
        return (
            <TouchableHighlight
                style={styles.btnLink}
                onPress={() => Linking.openURL(link)}
            >
                <Text style={styles.txtLink}>{this.state.item.BTN_TEXT}</Text>
            </TouchableHighlight>
        );
    }
  }

  _getEmbedVideo(videoLink) { 
    let v = String(videoLink).replace('watch?v=', 'embed/');
    v += '?version=3&enablejsapi=1&rel=0&autoplay=0&showinfo=0&controls=0';
    console.log(v);
    return v;
  }

  formatString(string) {
    return String(string)
      .replace('<br>', '\n')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/<(?:.|\n)*?>/gm, '');
  }  

  showModal() {
    this.setState({ modalVisible: true });
  }

  hiddenModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 22 }}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={
            () => {
              return false;
            }
          }
        >
          <Navbar onPress={() => this.hiddenModal()} arrowIsVisibility />
            <View style={styles.container}>
              <View style={styles.desriptionContainer}>

                <Text style={styles.title}>
                  {this.state.item.TITULO}
                </Text>

                <Text style={styles.description}>
                  {this.formatString(this.state.item.DESCRICAO)}
                </Text>

              </View>                  
              <WebView
                style={{ flex: 1, height: 100 }}
                javaScriptEnabled
                source={{ uri: (this.state.item.VIDEO_LINK !== '') ?
                this._getEmbedVideo(this.state.item.VIDEO_LINK) :
                this.state.item.IMG_LINK }}
              />
              { this.getButtonForLink(this.state.item.BTN_LINK) }
            </View>            
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginBottom: 5,
      backgroundColor: '#FFF'
  },
  desriptionContainer: {
      marginVertical: 4,
      marginHorizontal: 10
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000'    
  },
  description: {
      fontSize: 17,
      color: '#000',
      marginTop: 5
  },
  readMore: {
      fontSize: 16,
      color: '#016F9B',
      alignSelf: 'flex-end',
      marginTop: 30
  },
  containerLike: {
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center'
  },
  numberLike: {
      fontSize: 22,
      marginLeft: 5
  },
  btnLink: {
      backgroundColor: '#129471',
      marginVertical: 5,
      marginHorizontal: 10,
      padding: 13,
      borderRadius: 8
  },
  txtLink: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '500',
      alignSelf: 'center'
  }
});
