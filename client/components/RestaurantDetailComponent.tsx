import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { List } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Image, View, Text } from 'react-native';

import open from '@/assets/icons/open';
import { useTheme } from '@/theme/ThemeContext';
import { Restaurant } from '@/common/types/types';


export const RestaurantDetailComponent = ({ restaurant }: { restaurant: Restaurant }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState<boolean>(false);
  const [lunchExpanded, setLunchExpanded] = useState<boolean>(false);
  const [dinnerExpanded, setDinnerExpanded] = useState<boolean>(false);
  const [drinksExpanded, setDrinksExpanded] = useState<boolean>(false);

  const theme = useTheme().theme;

  const ratingArray: number[] = Array.from(
    new Array(Math.floor(restaurant.rating)),
    (_, i) => i
  );

  return (
    <View style={{ marginTop: theme.space.sm, marginBottom: theme.space.xl }}>
      <>
        <Image
          key={restaurant.id}
          resizeMode='stretch'
          source={{ uri: restaurant.photos[0] }}
          style={{
            height: theme.space.xxl * 4,
            borderRadius: theme.space.sm,
            marginBottom: theme.space.md,
          }}
        />

        <Text style={{ fontFamily: theme.fonts.heading, fontSize: theme.fontSize.lg }}>
          {restaurant.name}
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.space.sm }}>
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

            {restaurant.userRatingsTotal && <Text>({restaurant.userRatingsTotal})</Text>}
          </View>

          <View style={{ flexDirection: 'row', gap: theme.space.sm * 1.25, alignItems: 'center' }}>
            {restaurant.isClosedTemporarily && (
              <Text style={{ fontFamily: theme.fonts.heading, color: theme.colors.danger, fontSize: theme.fontSize.sm }}>
                CLOSED TEMPORARILY
              </Text>
            )}

            {restaurant.isOpenNow && (
              <SvgXml
                xml={open}
                width={theme.space.md * 1.25}
                height={theme.space.md * 1.25}
              />
            )}

            <Image
              source={{ uri: restaurant.icon }}
              style={{ height: theme.space.md, width: theme.space.md }}
            />
          </View>
        </View>

        <Text style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSize.md }}>
          {restaurant.address}
        </Text>
      </>

      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={() => {}} // bread-slice
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Eggs Benedict' />
          <List.Item title='Classic Breakfast' />
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          left={() => {}} // hamburger
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Burger & Fries' />
          <List.Item title='Steak Sandwich' />
          <List.Item title='Mushroom Soup' />
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          left={() => {}} // food-variant
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Spaghetti Bolognese' />
          <List.Item title='Veal Cutlet with Chicken Mushroom Rotini' />
          <List.Item title='steak Frites' />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={() => {}} // cup
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Modelo' />
          <List.Item title='Coke' />
          <List.Item title='Fanta' />
        </List.Accordion>
      </ScrollView>
    </View>
  );
};
