import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const UniversityDetailsScreen = () => {
  const handleLinkPress = (url: string) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <View className={`flex-1 bg-white p-6`}>
      {/* Header */}
      <View className={`flex-row items-center mb-4`}>
        <Pressable>
          <Feather name="chevron-left" size={24} color="black" onPress={()=>router.back()} />
        </Pressable>
        <Text className={`text-xl font-semibold ml-4`}>Digital University Kerala</Text>
      </View>

      {/* University Image */}
      <Image
        source={{ uri: 'https://link-to-image.jpg' }} // Replace with your image URL
        className={`w-full h-48 rounded-lg mb-4`}
        resizeMode="cover"
      />

      {/* University Name */}
      <Text className={`text-lg font-bold text-center mb-2`}>
        Kerala University of Digital Sciences, Innovation and Technology
      </Text>

      {/* Address */}
      <Text className={`text-sm text-gray-600 mb-2`}>
        <Text className={`font-semibold`}>Address: </Text>
        Technocity Campus Mangalapuram Thonnakkal P.O, Kerala 695317
      </Text>

      {/* Phone */}
      <Text className={`text-sm text-gray-600 mb-2`}>
        <Text className={`font-semibold`}>Phone: </Text>
        <Text
          className={`text-blue-500`}
          onPress={() => handleLinkPress('tel:+914712788000')}
        >
          0471 278 8000
        </Text>
      </Text>

      {/* University Description */}
      <Text className={`text-sm text-gray-600 mb-4`}>
        Kerala University of Digital Sciences, Innovation and Technology, Trivandrum also
        known as Digital University Kerala, is a state university located in Technocity,
        Mangalapuram, Pallippuram, Thiruvananthapuram, Kerala, India.
      </Text>

      {/* Courses */}
      <Text className={`text-lg font-semibold mb-2`}>Courses</Text>
      <Text className={`text-sm text-gray-600 mb-2`}>MSc IN COMPUTER SCIENCE</Text>
      <Text className={`text-sm text-gray-600 mb-2`}>MSc IN ECOLOGY</Text>
      <Text className={`text-sm text-gray-600 mb-2`}>MSc IN INFORMATICS</Text>
      <Text className={`text-sm text-blue-500 mb-4`} onPress={() => console.log('Show more courses')}>
        More...
      </Text>

      {/* Website Links */}
      <Text className={`text-sm text-gray-600 mb-2`}>
        <Text className={`font-semibold`}>Website: </Text>
        <Text
          className={`text-blue-500`}
          onPress={() => handleLinkPress('https://duk.ac.in/')}
        >
          https://duk.ac.in/
        </Text>
      </Text>

      <Text className={`text-sm text-gray-600`}>
        <Text className={`font-semibold`}>Apply: </Text>
        <Text
          className={`text-blue-500`}
          onPress={() => handleLinkPress('https://duk.ac.in/admission/')}
        >
          https://duk.ac.in/admission/
        </Text>
      </Text>
    </View>
  );
};

export default UniversityDetailsScreen;
