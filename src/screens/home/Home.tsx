import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

function Home({ navigation }: any) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl mb-4">{t('welcome')}</Text>
      <TouchableOpacity
        className="bg-blue-500 p-2 rounded-lg"
        onPress={() => navigation.navigate('Details')}
      >
        <Text className="text-lg text-white ">{t('goToDetails')}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
