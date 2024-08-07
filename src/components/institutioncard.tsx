import React from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface InstitutionCardProps {
  name: string;
  rating: number;
  reviews: number;
  field: string;
  description: string;
  image: any;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({ name, rating, reviews, field, description, image }) => {
  return (
    <View className='bg-white p-4 m-2 rounded-lg shadow-md'>
      <Image source={image} className='w-full h-40 rounded-lg' />
      <Text className='text-lg font-semibold mt-2'>{name}</Text>
      <View className='flex-row items-center'>
        <Feather name="star" size={20} color="gold" />
        <Text className='ml-1'>{rating} ({reviews})</Text>
      </View>
      <Text className='text-gray-500'>{field}</Text>
      <Text className='mt-1'>{description}</Text>
    </View>
  );
};

export default InstitutionCard;
