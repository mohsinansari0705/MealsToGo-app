import React, { useCallback, useRef, useMemo } from 'react';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';

import { useTheme } from '@/theme/ThemeContext';
import type { Restaurant } from '@/common/types/types';

type RestaurantDetailSheetProps = {
  restaurant: Restaurant | null;
  onClose?: () => void;
};

export const RestaurantDetailSheet = ({
  restaurant,
  onClose,
}: RestaurantDetailSheetProps) => {
  const theme = useTheme().theme;

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['45%'], []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose?.();
      }
    },
    [onClose]
  );
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior='close'
      />
    ),
    []
  );

  if (!restaurant) return null;

  return (
    <GestureHandlerRootView
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: theme.space.lg,
            alignItems: 'center',
          }}
        >
          <Text>{restaurant.name}</Text>
          <Text>{restaurant.address}</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
