import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button2 from '../../components/Button2';

const grades = [
  'Grade 10',
  'plus One - plus Two',
  'Graduation',
  'Post Graduation'
];

export default function GradeSelection() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center  bg-white p-5">
      <Text className="text-4xl font-bold mb-10 ">What's your grade?</Text>
      
      {grades.map((grade, index) => (
        <View className='mt-2 w-72 '>
        <TouchableOpacity
          key={index}
          className=""
          onPress={() => Alert.alert(`${grade} selected`)}
        >
        
          <Text className=" text-lg -full flex-row justify-between items-center p-4 mb-3 rounded-lg bg-slate-400 text-black font-semibold ">{grade}</Text>
          
         
        </TouchableOpacity>
        </View>
      ))}
      <Button2 title='Next' onPress={()=> router.push('/hobbie')}></Button2>
    </View>
  );
}
