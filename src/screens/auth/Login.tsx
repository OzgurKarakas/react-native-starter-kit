import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { login } = useAuth();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 justify-center items-center p-6 bg-white">
      <Text className="text-2xl font-bold mb-6">MyApp</Text>
      <TextInput
        placeholder={t('email')}
        value={email}
        onChangeText={setEmail}
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
      />
      <TextInput
        placeholder={t('password')}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        className="w-full border border-gray-300 rounded-lg p-3 mb-6"
      />
      <TouchableOpacity
        className="bg-blue-500 p-3 rounded-lg"
        onPress={() => login(email, password)}
      >
        <Text className="text-lg text-white">{t('login')}</Text>
      </TouchableOpacity>
    </View>
  );
}
