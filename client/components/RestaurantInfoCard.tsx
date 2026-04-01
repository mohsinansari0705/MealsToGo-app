import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

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
      'https://imgs.search.brave.com/zHpbo3QY1bMQdC-29Cc2OEH_0CeuFqa47KlSey4K8qk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qdW5rLWZvb2Rf/MTI2MTgzOC01OTI4/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA',
      'https://imgs.search.brave.com/Zt9SLvlHn25rgU0bwOgh8TTn3fdMowRv8LKQw0FBtyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/ODQwOTUxNC9waG90/by9hLW1hbGUtY2hl/Zi1zZXJ2aW5nLWEt/ZmluZS1kaW5pbmct/ZGlzaC1pbi1hLXJl/c3RhdXJhbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU9L/MGxBQ2JLdG82b2lP/amc1eGdVeFkyZlBT/OEN0VDNmWDlIaEsy/bnRRLU09',
    ],
    address: '100 some random street',
    isOpenNow: true,
    rating: 4.2,
    isClosedTemporarily: true,
  };

  const theme = useTheme().theme;

  const ratingArray: any[] = Array.from(
    new Array(Math.floor(restaurants.rating)),
    (_, i) => i
  );

  return (
    // <View style={{ paddingHorizontal: theme.space.md }}>
    <View>
      <Card mode='contained'>
        <Image
          key={restaurants.name}
          source={{ uri: restaurants.photos[1] }}
          resizeMode='stretch'
          style={{
            margin: theme.space.md,
            height: theme.space.xxl * 4,
            borderRadius: theme.space.sm,
          }}
        />
        <Card.Content>
          <Text style={{ fontFamily: theme.fonts.heading, fontSize: theme.fontSize.md * 1.1 }}>
            {restaurants.name}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: theme.space.xs * 0.75, marginVertical: theme.space.xs }}>
              {ratingArray.map((index) => (
                <Ionicons
                  key={index}
                  name='star'
                  size={theme.space.md}
                  color={theme.colors.warning}
                />
              ))}
            </View>

            <View style={{ flexDirection: 'row', gap: theme.space.sm * 1.25, alignItems: 'center' }}>
              {restaurants.isClosedTemporarily && (
                <Text
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.danger,
                    fontSize: theme.fontSize.sm,
                  }}
                >CLOSED TEMPORARILY</Text>
              )}

              {restaurants.isOpenNow && (
                <SvgXml xml={open} width={theme.space.md * 1.25} height={theme.space.md * 1.25} />
              )}

              <Image
                source={{ uri: restaurants.icon }}
                style={{ height: theme.space.md, width: theme.space.md }}
              />
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
