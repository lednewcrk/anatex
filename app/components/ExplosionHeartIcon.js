import React from 'react';
import { Image } from 'react-native';

//const icon = require('../lottiesFiles/love_explosion.json');
const heart = require('../src/imgs/heart.png');

export default class ExplosionHeartIcon extends React.Component {
  render() {
    return (
      <Image source={heart} style={{ width: 20, height: 20 }} />
    );
  }
}
