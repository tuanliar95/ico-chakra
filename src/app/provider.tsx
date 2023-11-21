// app/providers.tsx
'use client';

import store from '@/reduxs/store';
console.log("🚀 ~ file: provider.tsx:5 ~ store:", store)
import theme from '@/themes';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <CacheProvider>
    //   <ChakraProvider theme={theme}>{children}</ChakraProvider>
    // </CacheProvider>
    <Provider store={store}>{children}</Provider>
  );
}
