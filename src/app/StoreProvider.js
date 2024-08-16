'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../lib/store';
import { login } from '../lib/features/user/userSlice'; 

export default function StoreProvider({ data, children }) {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(login(data));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
