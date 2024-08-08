import React from 'react';
import { View, Text, TouchableOpacity, Linking, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const NEETDetailsScreen = () => {
  const handleApplyNowPress = () => {
    // Open the official NEET application page in the browser
    const url = 'https://ntaneet.nic.in/';
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <View className={`flex-1 bg-white p-6`}>
      {/* Header */}
      <View className={`flex-row items-center mb-6`}>
        <Pressable onPress={()=>router.back()}>
          <Feather name="chevron-left" size={24} color="black" />
        </Pressable>
        <Text className={`text-xl font-semibold ml-4`}>NEET Exam Details</Text>
      </View>

      {/* NEET Details */}
      <View>
        <Text className={`text-4xl font-bold mb-4 mt-6 text-blue-900`}>NEET 2024 Examination</Text>
        <Text className={`text-xl text-gray-700 mb-4 font-bold`}>
          The National Eligibility cum Entrance Test (NEET) is the entrance examination for admission to medical courses like MBBS, BDS, etc., in India. Below are the key details for NEET 2024.
        </Text>

        <Text className={`text-xl text-gray-700 mb-2`}>
          <Text className={`font-semibold`}>Exam Date:</Text> May 2024
        </Text>
        <Text className={`text-xl text-gray-700 mb-2`}>
          <Text className={`font-semibold`}>Application Start Date:</Text> February 2024
        </Text>
        <Text className={`text-xl text-red-700 mb-2`}>
          <Text className={`font-semibold`}>Application End Date:</Text> March 2024
        </Text>
        <Text className={`text-lg text-gray-700 mb-2`}>
          <Text className={`font-semibold`}>Admit Card Release:</Text> April 2024
        </Text>
        <Text className={`text-lg text-gray-700 mb-2`}>
          <Text className={`font-semibold`}>Result Declaration:</Text> June 2024
        </Text>

        <Text className={`text-lg text-gray-700 mb-4`}>
          <Text className={`font-semibold`}>Official Website:</Text> <Text className={`text-blue-500`}>https://ntaneet.nic.in/</Text>
        </Text>
      </View>

      {/* Apply Now Button */}
      <Pressable
        className={`bg-blue-500 py-3 rounded-full flex-row items-center justify-center mt-6`}
        onPress={handleApplyNowPress}
      >
        <Text className={`text-white text-lg font-semibold`}>Apply Now</Text>
        <Feather name="external-link" size={20} color="white" className={`ml-2`} />
      </Pressable>
    </View>
  );
};

export default NEETDetailsScreen;
