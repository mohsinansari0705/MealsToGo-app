import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import open from '../assets/icons/open';
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

  const ratingArray: any[] = Array.from(new Array(Math.floor(restaurants.rating)));

  return (
    <View style={{ paddingHorizontal: theme.space.md }}>
      <Card mode='contained'>
        <Card.Cover
          key={restaurants.name}
          source={{ uri: restaurants.photos[0] }}
          style={{ margin: theme.space.md }}
        />
        <Card.Content>
          <Text style={{ fontFamily: theme.fonts.heading, fontSize: theme.fontSize.md * 1.1 }}>
            {restaurants.name}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: theme.space.xs * 0.75, marginVertical: theme.space.xs }}>
              {ratingArray.map(() =>
                <Ionicons name='star' size={theme.space.md} color={theme.colors.warning} />
              )}
            </View>
            
            <View style={{ flexDirection: 'row', gap: theme.space.sm * 1.25, alignItems: 'center' }}>
              {restaurants.isClosedTemporarily && (
                <Text style={{ fontFamily: theme.fonts.heading, color: theme.colors.danger, fontSize: theme.fontSize.sm }}>CLOSED TEMPORARILY</Text>
              )}

              {restaurants.isOpenNow && <SvgXml xml={open} width={theme.space.md * 1.25} height={theme.space.md * 1.25} />}

              <Image source={{ uri: restaurants.icon }} style={{ height: theme.space.md, width: theme.space.md }} />
            </View>
          </View>

          <Text style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSize.md }}>
            {restaurants.address}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};
