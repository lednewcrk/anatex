import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Axios from 'axios';

import ScrollCategories from './ScrollCategories.js';
import ItemsList from './ItemsList.js';

const urlToGetItems = 'http://demo1650020.mockable.io/anatex';

export default class Feed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      itemsList: [],
      currentItemsList: []
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
            currentItemsList: response.data.CONTEUDO,
            itemsList: response.data.CONTEUDO
          });
        }
      ).catch(
        () => {
          console.log('Erro ao recuperar os dados!');
      }
    );
  }

  filterFeed(categoryId) {
      this.setState({
        currentItemsList: (categoryId === 0) ? this.state.itemsList :
        this.state.itemsList.filter((item) => item.ID_CATEGORIA === categoryId)
      });
  }

  render() {
    return (    
      <View style={styles.container}>
        <View>
          <ScrollCategories
            onPress={
              (categoryId) => this.filterFeed(categoryId)} categories={this.state.categories}
            />
        </View>
        <View>
          <ItemsList itemsList={this.state.currentItemsList} />
        </View>
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

