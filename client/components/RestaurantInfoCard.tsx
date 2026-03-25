import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';


type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
type RestaurantInfoCardProps = {
  restaurants: Restaurant;
};

export const RestaurantInfoCard = ({ restaurants }: RestaurantInfoCardProps) => {
  return (
    <View>
      <Card mode='contained'>
        <Card.Cover
          key={restaurants.name}
          source={{ uri: restaurants.photos[0] }}
          style={{ margin: 16 }}
        />
        <Card.Content>
          <Text style={{ fontSize: 16 }}>{restaurants.name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};
