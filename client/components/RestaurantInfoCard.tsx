import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image } from 'react-native';

import open from '../assets/icons/open';
import { useTheme } from '../theme/ThemeContext';
import type { Restaurant } from '../common/types/types';


type RestaurantInfoCardProps = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard = ({ restaurant }: RestaurantInfoCardProps) => {
  const theme = useTheme().theme;

  const {
    id,
    name,
    address,
    photos,
    icon,
    rating,
    userRatingsTotal,
    isOpenNow,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray: number[] = Array.from(
    new Array(Math.floor(rating)),
    (_, i) => i
  );

  
  return (
    <View>
      <Card mode='contained'>
        <Image
          key={id}
          source={{ uri: photos[0] }}
          resizeMode='stretch'
          style={{
            margin: theme.space.md,
            height: theme.space.xxl * 4,
            borderRadius: theme.space.sm,
          }}
        />
        <Card.Content>
          <Text style={{ fontFamily: theme.fonts.heading, fontSize: theme.fontSize.md * 1.1 }}>
            {name}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', gap: theme.space.sm, alignItems: 'center' }}>
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
              {userRatingsTotal && (
                <Text>({userRatingsTotal})</Text>
              )}
            </View>

            <View style={{ flexDirection: 'row', gap: theme.space.sm * 1.25, alignItems: 'center' }}>
              {isClosedTemporarily && (
                <Text style={{ fontFamily: theme.fonts.heading, color: theme.colors.danger, fontSize: theme.fontSize.sm }}>
                  CLOSED TEMPORARILY
                </Text>
              )}

              {isOpenNow && (
                <SvgXml xml={open} width={theme.space.md * 1.25} height={theme.space.md * 1.25} />
              )}

              <Image
                source={{ uri: icon }}
                style={{ height: theme.space.md, width: theme.space.md }}
              />
            </View>
          </View>

          <Text style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSize.md }}>
            {address}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};
