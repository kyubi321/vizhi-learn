import React from 'react';
import { View, Text, Image } from 'react-native';

interface ScholarshipCardProps {
  name: string;
  field: string;
  description: string;
  
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ name,  field, description }) => {
  return (
    <View className='bg-white p-4 m-2 rounded-lg shadow-md'>
      <Text className='text-lg font-semibold mt-2'>{name}</Text>
      <Text className='text-gray-500'>{field}</Text>
      <Text className='mt-1'>{description}</Text>
    </View>
  );
};

export default ScholarshipCard;