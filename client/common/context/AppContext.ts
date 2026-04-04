import React, { createContext } from 'react';
import { Api } from '../api/api';


export class ContextData {
  appname: string = 'MealsToGo';
  initialized: boolean = false;
  api: Api;

  constructor(opts?: {
    useMock?: boolean;
    postEvent?: (name: string, payload?: any) => void;
  }) {
    this.api = new Api(opts?.useMock ?? true, opts?.postEvent);
  }
}

export type AppContextValue = {
  context: ContextData;
  setContext: React.Dispatch<React.SetStateAction<ContextData>>;
};

const defaultValue: AppContextValue = {
  context: new ContextData({ useMock: true }),
  setContext: () => {},
};

export const AppContext = createContext<AppContextValue>(defaultValue);
