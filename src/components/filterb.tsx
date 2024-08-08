import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';


interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, isActive, onPress }) => {
  return (
    <Pressable
      className={`px-4 py-2 rounded-full ${isActive ? 'bg-blue-500' : 'bg-gray-200'} mr-2 mb-2`}
      onPress={onPress}
    >
      <Text className={`${isActive ? 'text-white' : 'text-gray-700'}`}>{label}</Text>
    </Pressable>
  );
};

export default FilterButton;
