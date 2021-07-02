import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import SignIn from './src/screens/SignIn'

export default function App() {

  const [Loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!Loaded) return <AppLoading />
  return (
    <>
      <StatusBar style="light" />
      <SignIn />
    </>
  );
}
