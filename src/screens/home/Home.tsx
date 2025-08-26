import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

function Home({ navigation }: any) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-4">{t('welcome')}</Text>
      <Button
        title={t('goToDetails')}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default Home;
