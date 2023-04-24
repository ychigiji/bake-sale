import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import DealItem from './DealItem';

import { DealsProps } from '../models/dealsModels';

const DealsList = ({ deals, onItemPress }: DealsProps) => {
  return (
    <View style={style.list}>
      <FlatList
        data={deals}
        renderItem={({ item }) => (
          <DealItem
            media={item.media}
            title={item.title}
            price={item.price}
            cause={item.cause}
            key={item.key}
            id={item.id}
            onItemPress={() => onItemPress(item.key)}
          />
        )}
      />
    </View>
  );
};

export default DealsList;

const style = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    width: '100%',
  },
});
