import React, { useCallback, useRef, useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

import { useTheme } from '@/theme/ThemeContext';
import type { Restaurant } from '@/common/types/types';
import { RestaurantDetailComponent } from './RestaurantDetailComponent';


type RestaurantDetailSheetProps = {
  restaurant: Restaurant | null;
  onClose?: () => void;
};

export const RestaurantDetailSheet = ({ restaurant, onClose }: RestaurantDetailSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['75%'], []);
  
  const theme = useTheme().theme;

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      onClose?.();
    }
  }, [onClose]);

  const renderBackdrop = useCallback((props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      pressBehavior='close'
    />
  ), []);

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
        index={0}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={{ flex: 1, paddingHorizontal: theme.space.lg }}>
          <RestaurantDetailComponent restaurant={restaurant} />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};
