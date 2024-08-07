import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = () => {
  return (
    <View className='flex-row items-center bg-gray-200 p-3 rounded-full my-4 mx-2'>
      <Feather name="search" size={24} color="gray" />
      <TextInput 
        placeholder="Search Institute" 
        className='flex-1 ml-2 text-lg'
      />
    </View>
  );
};

export default SearchBar;
