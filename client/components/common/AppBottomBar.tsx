import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme/ThemeContext';
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
  const theme = useTheme().theme;

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
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: theme.space.sm,
            paddingHorizontal: theme.space.sm,
            backgroundColor: theme.colors.foreground,
            borderRadius: theme.space.md,
            boxShadow: '0px 2px 8px 8px rgba(0, 0, 0, 0.12)',
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
              onPress={() => {
                router.navigate(basePath + tab.id);
                setLayoutContext((old) =>
                  old.setBottomBar(old, undefined, tab.id)
                );
              }}
              style={{ flex: 1, alignItems: 'center', paddingVertical: theme.space.xs * 1.5 }}
            >
              <View
                style={[
                  {
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: theme.space.sm * 1.25,
                    borderRadius: theme.space.sm * 1.5,
                  },
                  active && { backgroundColor: theme.colors.info + '20' },
                ]}
              >
                <Ionicons
                  name={tab.icon}
                  size={22}
                  color={ active ? theme.colors.info : theme.colors.textSecondary }
                />
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
