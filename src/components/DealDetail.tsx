import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
  Animated,
  Dimensions,
  Button,
  Linking,
  ScrollView,
} from 'react-native';
import { priceDisplay } from '../util';
import { fetchDealDetail } from '../ajax';
import { Deal, DealDetailProps } from '../models/dealsModels';
import { style } from '../styles';

const DealDetail = ({ media, title, price, cause, onItemPress, id }: Deal) => {
  const [initialDealData, setInitialDealData] = useState<DealDetailProps>();
  const [imageIndex, setImageIndex] = useState(0);
  const imageXPos = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;
  const imagePaneResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gs) => {
      imageXPos.setValue(gs.dx);
    },
    onPanResponderRelease: (evt, gs) => {
      if (Math.abs(gs.dx) > width * 0.3) {
        const direction = Math.sign(gs.dx);
        Animated.timing(imageXPos, {
          toValue: direction * width,
          duration: 250,
          useNativeDriver: false,
        }).start(() => handleSwipe(-1 * direction));
      } else {
        Animated.spring(imageXPos, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });
  const openDealUrl = () => {
    initialDealData && Linking.openURL(initialDealData?.url);
  };
  const handleSwipe = (indexDirection: number) => {
    if (!media[imageIndex + indexDirection]) {
      Animated.spring(imageXPos, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      return;
    }
    setImageIndex(imageIndex + indexDirection);
    imageXPos.setValue(indexDirection * width);
    Animated.spring(imageXPos, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    const fetchData = async () => {
      const deals = await fetchDealDetail(id);
      setInitialDealData(deals);
    };
    fetchData();
  }, [id]);

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => onItemPress(null)}>
        <Text style={style.backLink}>Back</Text>
      </TouchableOpacity>
      <Animated.Image
        {...imagePaneResponder.panHandlers}
        source={{ uri: media[imageIndex] }}
        style={[style.image, { left: imageXPos }]}
      />
      <View>
        <Text style={style.title}> {title}</Text>
      </View>
      <View style={style.dealDetailInfo}>
        <View style={style.user}>
          <Image
            source={{ uri: initialDealData?.user?.avatar }}
            style={style.avatar}
          />
          <Text style={style.dealDetailUserText}>
            {initialDealData?.user.name}
          </Text>
        </View>
        <View>
          <Text style={style.cause}>{cause.name}</Text>
          <Text style={style.price}>{priceDisplay(price)} </Text>
        </View>
      </View>
      <View style={style.description}>
        <Text>{initialDealData?.description}</Text>
      </View>
      <View>
        <Button title="Purchase Deal!" onPress={openDealUrl} />
      </View>
    </ScrollView>
  );
};

export default DealDetail;
