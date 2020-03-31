import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function PlaceList() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.logo}>
          DIVULGA
        </Text>
      </View>
    </View>
  );
}