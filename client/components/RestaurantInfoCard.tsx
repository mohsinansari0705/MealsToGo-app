import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';


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
  const theme = useTheme().theme;

  return (
    <View style={{ paddingHorizontal: theme.space.md }}>
      <Card mode='contained'>
        <Card.Cover
          key={restaurants.name}
          source={{ uri: restaurants.photos[0] }}
          style={{ margin: theme.space.md }}
        />
        <Card.Content>
          <Text
            style={{
              fontSize: theme.fontSize.md,
              fontFamily: theme.fonts.heading
            }}
          >{restaurants.name}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};
