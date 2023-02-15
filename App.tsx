import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components'
import theme from '@theme/index';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

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


