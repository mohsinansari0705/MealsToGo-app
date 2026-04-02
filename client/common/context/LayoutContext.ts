import React from 'react';

export type BottomTabId = 'restaurants' | 'map' | 'settings';

export class LayoutData {
  bottomBarVisible = true;
  bottomBarSelectedId = 'restaurants';
  bottomBarHeight = 0;

  setBottomBar(
    old: LayoutData,
    visible?: boolean,
    selectedId?: BottomTabId,
    height?: number
  ) {
    const next = new LayoutData();

    next.bottomBarVisible = visible ?? old.bottomBarVisible;
    next.bottomBarSelectedId = selectedId ?? old.bottomBarSelectedId;
    next.bottomBarHeight = height ?? old.bottomBarHeight;

    return next;
  }
}

type LayoutContextValue = {
  layoutContext: LayoutData;
  setLayoutContext: React.Dispatch<React.SetStateAction<LayoutData>>;
};

export const LayoutContext = React.createContext<LayoutContextValue>({
  layoutContext: new LayoutData(),
  setLayoutContext: () => {},
});
