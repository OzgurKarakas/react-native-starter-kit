import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        className="px-3 py-2 bg-gray-200 rounded-md"
        onPress={() => setModalVisible(true)}
      >
        <Text className="font-bold">{i18n.language?.toUpperCase()}</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable className="flex-1" onPress={() => setModalVisible(false)}>
          <View className="absolute top-12 right-4 bg-white rounded-xl shadow-lg min-w-[120px]">
            {languages.map(item => (
              <TouchableOpacity
                key={item.code}
                className="px-4 py-3 border-b border-gray-300"
                onPress={() => changeLanguage(item.code)}
              >
                <Text className="text-base">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
