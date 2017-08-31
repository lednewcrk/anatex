import React, { Component } from 'react';
import {
    ScrollView
} from 'react-native';

import Items from './Items.js';
import ModalItem from './ModalItem.js';

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsVisibly: false,
            item: []
        };
    }

    showModal(item) {
        console.log(item.TITULO);
        this.setState({
            modalIsVisibly: true,
            item
        });
    }

    render() {
        return (
            <ScrollView>
                <ModalItem item={this.state.item} modalIsVisibly={this.state.modalIsVisibly} />
                { this.props.itemsList.map((item) => 
                    (<Items onPress={(item) => this.showModal(item)} key={item.ID} item={item} />)) }
            </ScrollView>
        );
    }
}
