import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Button2 from '../../components/Button2';


export default function Details() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <View className="w-full mb-5">
        <Text className="text-lg font-bold mb-2">Name</Text>
        <TextInput
          placeholder="Student name"
          className="w-full border border-gray-300 rounded p-2"
        />
      </View>
      <View className="w-full mb-5">
        <Text className="text-lg font-bold mb-2">Email</Text>
        <TextInput
          placeholder="name@example.com"
          className="w-full border border-gray-300 rounded p-2"
        />
      </View>
      <View className="w-full mb-5">
        <Text className="text-lg font-bold mb-2">Phone number</Text>
        <TextInput
          placeholder="123456789"
          className="w-full border border-gray-300 rounded p-2"
        />
      </View>
      <View className="w-full mb-5">
        <Text className="text-lg font-bold mb-2">Place</Text>
        <TextInput
          placeholder="Name of the place"
          className="w-full border border-gray-300 rounded p-2"
        />
      </View>
      <Button2 title='Next' onPress={()=>router.push("/grade")}></Button2>
    </View>
  );
}
