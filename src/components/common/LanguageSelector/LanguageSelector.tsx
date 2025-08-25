import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setDropdownVisible(false);
  };

  return (
    <View className="relative z-50">
      <TouchableOpacity
        className="mr-4 py-2 px-3 bg-gray-200 rounded-md"
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text className="font-bold">{i18n.language?.toUpperCase()}</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <View className="absolute right-4 top-full bg-white rounded-xl shadow-lg min-w-[120px]">
          {languages.map(item => (
            <TouchableOpacity
              key={item.code}
              className="p-3 border-b border-gray-300"
              onPress={() => changeLanguage(item.code)}
            >
              <Text className="text-base">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
