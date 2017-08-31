import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ScrollCategory from './ScrollCategory';

export default class ScrollCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        this.setState({
            categories: this.props.categories
        });
    }

    componentWillReceiveProps(nextProps) {        
        if (JSON.stringify(this.props.categories) !== JSON.stringify(nextProps.categories)) {
            this.setState({
                categories: nextProps.categories
            });
        }
    }

    render() {
        return (
            <ScrollView horizontal style={styles.container}>
                <ScrollCategory
                    key={0}
                    onPress={(categoryId) => this.props.onPress(0)}
                    description={'TODOS'}
                />
                { 
                    this.state.categories.map((item) =>
                    <ScrollCategory
                        key={item.ID}
                        onPress={(categoryId) => this.props.onPress(item.ID)}
                        description={item.DESCRICAO}
                    />)
                }        
                                        
            </ScrollView>
        );
    }
}

//Styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingVertical: 7,
        paddingHorizontal: 3
    }
});

