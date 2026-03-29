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
// type RestaurantInfoCardProps = {
//   restaurants: Restaurant;
// };

// export const RestaurantInfoCard = ({ restaurants }: RestaurantInfoCardProps) => {
export const RestaurantInfoCard = () => {
  const restaurants: Restaurant = {
    name: 'Some Restaurant',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: [
      'https://imgs.search.brave.com/qLazr26Lu6vYYB-vHR6zUvWJh-KaXqczO7trkHnx8iY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjU4MTM1MDYwNjIt/MGFlYjFkN2EwOTRi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1URjhmR0oxY21k/bGNueGxibnd3Zkh3/d2ZIeDhNQT09',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4.2,
    isClosedTemporarily: true,
  }

  const theme = useTheme().theme;

  const ratingArray: any[] = Array.from(
    new Array(Math.floor(restaurants.rating)),
    (_, i) => i
  );

  return (
    // <View style={{ paddingHorizontal: theme.space.md }}>
    <View>
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
              {ratingArray.map((index) =>
                <Ionicons
                  key={index}
                  name='star'
                  size={theme.space.md}
                  color={theme.colors.warning}
                />
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
