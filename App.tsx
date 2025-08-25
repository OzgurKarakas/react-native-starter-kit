/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import './src/i18n/i18n';
import { View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './src/components/common/LanguageSelector/LanguageSelector';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/services/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView
          edges={['top']}
          className={'flex-row justify-end p-[10px]'}
        >
          <LanguageSelector />
        </SafeAreaView>

        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl ">{t('welcome')}</Text>
        </View>
      </SafeAreaProvider>
      {__DEV__ && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
