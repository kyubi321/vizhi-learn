import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';


const ScholarshipPage = () => {
  const router = useRouter();

  return (
    <ScrollView className="bg-white p-4">
      <View className="flex flex-row items-center space-x-2 mb-6">
        <Pressable onPress={() => router.back()} className='mt-8 ml-3'>
          <Text className="text-2xl">{`<`}</Text>
        </Pressable>
        <Text className="text-3xl font-bold text-gray-800 ml-4 mt-8 font-bold">Scholarship</Text>
      </View>

      {Array(3).fill('').map((_, index) => (
        <View key={index} className="bg-gray-300 rounded-xl p-4 mb-6">
          <Text className="text-gray-700 text-lg mb-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </Text>
          <Pressable className="bg-blue-600 rounded-full p-3 items-center">
            <Text className="text-white text-lg font-bold">Apply</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default ScholarshipPage;
