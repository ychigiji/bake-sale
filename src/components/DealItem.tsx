import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Deal } from '../models/dealsModels';
import { style } from '../styles';

import { priceDisplay } from '../util';
import {} from 'react-native';

const DealItem = ({ media, title, price, cause, onItemPress, id }: Deal) => {
  const priceToDisplay = priceDisplay(price);

  return (
    <TouchableOpacity onPress={() => onItemPress(id)}>
      <View>
        <Image source={{ uri: media[0] }} style={style.image} />
        <View style={style.dealItemInfo}>
          <Text style={style.dealItemtitle}> {title}</Text>
          <Text style={style.dealItemprice}>{priceToDisplay}</Text>
          <Text style={style.dealItemcause}> {cause.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DealItem;
