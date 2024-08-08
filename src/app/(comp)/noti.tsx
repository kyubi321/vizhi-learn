import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const ExamPage = () => {
  const router = useRouter();

  return (
    <ScrollView className="bg-white p-4">
      <View className="flex flex-row items-center space-x-2 mb-6">
        <Pressable onPress={() => router.back()} className='mt-8 ml-3'>
          <Text className="text-2xl">{`<`}</Text>
        </Pressable>
        <Text className="text-3xl font-bold text-gray-800 ml-4 mt-8">Exams</Text>
      </View>

      {Array(3).fill('').map((_, index) => (
        <View key={index} className="bg-gray-300 rounded-xl p-4 mb-6">
          <Text className="text-gray-700 text-lg font-bold mb-2">Exam Name {index + 1}</Text>
          <Text className="text-gray-700 text-md mb-2">
            Date: {new Date().toLocaleDateString()} - This is a placeholder for the exam date.
          </Text>
          <Text className="text-gray-700 text-md mb-4">
            Description: This exam will test your knowledge on various subjects. Make sure to review all the material provided.
          </Text>
          <Pressable className="bg-blue-600 rounded-full p-3 items-center">
            <Text className="text-white text-lg font-bold">Register</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default ExamPage;
