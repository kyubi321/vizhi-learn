import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface InstitutionCardProps {
  name: string;
  rating: number;
  reviews: number;
  address: string;
  image: any;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({ name, rating, reviews, address, image }) => {
  return (
    <View className={`bg-white p-4 m-2 rounded-lg shadow-md flex-row`}>
      <Image source={image} style={`w-24 h-24 rounded-lg`} />
      <View className={`ml-4 flex-1`}>
        <Text className={`text-lg font-semibold`}>{name}</Text>
        <View className={`flex-row items-center`}>
          <Feather name="star" size={20} color="gold" />
          <Text className={`ml-1`}>{rating} ({reviews})</Text>
        </View>
        <Text className={`text-gray-500 mt-1`}>Address: {address}</Text>
      </View>
    </View>
  );
};

export default InstitutionCard;
