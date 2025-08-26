import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const Details = () => {
  const { t } = useTranslation();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-xl">{t('detail')}</Text>
    </View>
  );
};

export default Details;
