import { View, Text, Image, StatusBar } from 'react-native';
import React from 'react';
import { CircleButton } from './Button';
import { assets, SIZES } from '../constants';

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
        source={data?.image}
      />

      <CircleButton
        imgUrl={assets.left}
        left={15}
        top={StatusBar.currentHeight + 10}
        handlePress={() => navigation.goBack()}
      />

      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};

export default DetailsHeader;
