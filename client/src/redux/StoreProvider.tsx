"use client"

import { useRef } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { AppStore, makeStore } from ".";
import { setupListeners } from "@reduxjs/toolkit/query";
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";

/* PROVIDER */
export default function StoreProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
      storeRef.current = makeStore();
      setupListeners(storeRef.current.dispatch);
    }
    const persistor = persistStore(storeRef.current);
  
    return (
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }