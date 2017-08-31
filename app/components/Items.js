import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    WebView,
    Linking
} from 'react-native';

import ExplosionHeartIcon from './ExplosionHeartIcon.js';

export default class ItemsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsVisibly: false
        };
    }

    getButtonForLink(link) {
        if (link !== '') {
            return (
                <TouchableHighlight
                    style={styles.btnLink}
                    onPress={() => Linking.openURL(link)}
                >
                    <Text style={styles.txtLink}>{this.props.item.BTN_TEXT}</Text>
                </TouchableHighlight>
            );
        }
    }

    _getEmbedVideo(videoLink) { 
        return videoLink.replace('watch?v=', 'embed/') + 
        '?version=3&enablejsapi=1&rel=0&autoplay=0&showinfo=0&controls=0';
    }

    formatString(string) {
        return String(string)
            .replace('<br>', '\n')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/<(?:.|\n)*?>/gm, '');
    }    

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.desriptionContainer}>
                        <Text style={styles.title}>
                            {this.formatString(this.props.item.TITULO)}
                        </Text>
                        <Text style={styles.description} numberOfLines={5}>
                            {this.formatString(this.props.item.DESCRICAO)}
                        </Text>
                        <TouchableHighlight
                            underlayColor={'#129471'}
                            activeOpacity={0.3}
                            style={styles.button}
                            onPress={(item) => this.props.onPress(this.props.item)}
                        >
                            <Text style={styles.readMore}>Continue Lendo</Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <WebView
                            style={{ flex: 1, height: 200 }}
                            javaScriptEnabled
                            source={{ uri: (this.props.item.VIDEO_LINK !== '') ?
                                this._getEmbedVideo(this.props.item.VIDEO_LINK) :
                                this.props.item.IMG_LINK }}
                        />
                        { this.getButtonForLink(this.props.item.BTN_LINK) }
                    </View>
                    <View style={styles.containerLike}>
                        <ExplosionHeartIcon />
                        <Text style={styles.numberLike}>
                            {this.props.item.RECORD_ITEM[0].CURTIDA.length} curtidas
                        </Text>
                    </View>
                </View>
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
        fontSize: 18,
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
