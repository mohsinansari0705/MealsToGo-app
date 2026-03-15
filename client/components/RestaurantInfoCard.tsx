import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";

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

export const RestaurantInfoCard = ({
  restaurants = {
    name: "Some Restaurant",
    icon: "random Icon",
    photos: [
      "https://imgs.search.brave.com/qLazr26Lu6vYYB-vHR6zUvWJh-KaXqczO7trkHnx8iY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MjU4MTM1MDYwNjIt/MGFlYjFkN2EwOTRi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE1URjhmR0oxY21k/bGNueGxibnd3Zkh3/d2ZIeDhNQT09",
    ],
    address: "100 some random street",
    isOpenNow: true,
    rating: 4,
    isClosedTemporarily: false,
  },
}: RestaurantInfoCardProps) => {
  return (
    <View>
      <Card mode="contained">
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
