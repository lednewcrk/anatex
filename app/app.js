import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Axios from 'axios';

import Navbar from './components/Navbar.js';
import Tabview from './components/Tabview.js';

const urlToGetItems = 'http://demo1650020.mockable.io/anatex';

export default class AnaTex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      itemsList: []
    };
  }

  /**
   * Faz uma requisição http para adquirir os itens da lista.
   * URL para requisião http
   * 
   * @return null
   */
  componentWillMount() {
    Axios.get(urlToGetItems)
      //Retorna um promeses, uma promessa de execução assincrona
      .then(
        (response) => {     
          this.setState({
            categories: response.data.CATEGORIA,
            itemsList: response.data.CONTEUDO
          });
        }
      ).catch(
        () => {
          console.log('Erro ao recuperar os dados!');
      }
    );
  }

  render() {
    return (    
      <View style={{ flex: 1 }}>
        <Navbar />
        <Tabview />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  }
});

