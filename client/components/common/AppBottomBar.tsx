import React, { useContext } from 'react';
import { Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { LayoutContext } from '../../common/context/LayoutContext';

const TABS = [
  { id: 'restaurants', icon: 'restaurant' as const },
  { id: 'map', icon: 'map' as const },
  { id: 'settings', icon: 'settings' as const },
] as const;

export function AppBottomBar({ basePath = '/' }: { basePath: string }) {
  const { layoutContext, setLayoutContext } = useContext(LayoutContext);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  if (!layoutContext.bottomBarVisible) return null;

  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
      }}
      pointerEvents='box-none'
    >
      <View
        style={[
          {
            marginHorizontal: 12,
            borderRadius: 16,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 8,
            shadowColor: '#000',
            shadowOpacity: 0.12,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },
            elevation: 8,
          },
          {
            bottom: insets.bottom,
          },
        ]}
        onLayout={(e) => {
          const h = e.nativeEvent.layout.height;
          if (h !== layoutContext.bottomBarHeight) {
            setLayoutContext((old) =>
              old.setBottomBar(old, undefined, undefined, h)
            );
          }
        }}
      >
        {TABS.map((tab) => {
          const active = layoutContext.bottomBarSelectedId === tab.id;
          return (
            <Pressable
              key={tab.id}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 6,
              }}
              onPress={() => {
                router.navigate(basePath + tab.id);
                setLayoutContext((old) =>
                  old.setBottomBar(old, undefined, tab.id)
                );
              }}
            >
              <View
                style={[
                  {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  active && { backgroundColor: 'rgba(10, 132, 255, 0.12)' },
                ]}
              >
                <Ionicons
                  name={tab.icon}
                  size={22}
                  color={active ? '#0A84FF' : '#7A7A7A'}
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
