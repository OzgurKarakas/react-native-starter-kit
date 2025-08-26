import './global.css';
import './src/i18n/i18n';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './src/components/common/LanguageSelector/LanguageSelector';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services/queryClient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import Details from './src/screens/details/Details';
import { AuthProvider, useAuth } from './src/context/AuthProvider';
import Login from './src/screens/auth/Login';

const HeaderLanguageSelector = () => {
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <View className="flex flex-row items-center gap-2">
      <LanguageSelector />
      {user && (
        <TouchableOpacity
          onPress={logout}
          className="bg-red-500 px-4 py-2 rounded-md"
        >
          <Text className="text-white font-bold">{t('logout')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const Stack = createNativeStackNavigator();

function AppStack() {
  const { t } = useTranslation();

  return (
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
  );
}

function AuthStack() {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: t('login'),
          headerRight: HeaderLanguageSelector,
        }}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user } = useAuth();
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
