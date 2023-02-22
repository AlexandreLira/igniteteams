import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'expo-status-bar';

import { Loading } from '@components/Loading';

import theme from '@theme/index';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent={false}
        style='inverted'
        backgroundColor={theme.COLORS.GRAY_600}
      />
      {fontsLoaded ? <Routes /> : <Loading size={'large'} />}

    </ThemeProvider>
  );
}


