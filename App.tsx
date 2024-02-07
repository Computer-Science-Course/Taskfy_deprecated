import { useFonts } from 'expo-font'
import { useEffect } from 'react';

import '@tamagui/core/reset.css'
import config from './tamagui.config';

import MyApp from './MyApp';
import { TamaguiProvider, Theme } from '@tamagui/core';

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <MyApp />
      </Theme>
    </TamaguiProvider>
  )
}
