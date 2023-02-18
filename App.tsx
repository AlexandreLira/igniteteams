import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'expo-status-bar';

import { Groups } from '@screens/Groups';
import { Loading } from '@components/Loading';

import theme from '@theme/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })


  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent={false}
        style='inverted'
        backgroundColor={theme.COLORS.GRAY_600}
      />
      {fontsLoaded ? <Groups /> : <Loading size={'large'} />}

    </ThemeProvider>
  );
}


