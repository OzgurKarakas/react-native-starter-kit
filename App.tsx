import './global.css';
import './src/i18n/i18n';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './src/components/common/LanguageSelector/LanguageSelector';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services/queryClient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import Details from './src/screens/details/Details';

const HeaderLanguageSelector = () => <LanguageSelector />;



const Stack = createNativeStackNavigator();

function App() {
  const { t } = useTranslation();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: t('home'),
                headerRight: HeaderLanguageSelector,
              }}
            />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ title: t('detail') }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
