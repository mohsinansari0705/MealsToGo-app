import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <StatusBar style="auto" animated={true} />

      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ padding: 16, backgroundColor: "green" }}>
            <Text>Search...</Text>
          </View>
          <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
            <Text>List</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
