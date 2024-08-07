import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Button2 from '../../components/Button2';
import { router, useRouter } from 'expo-router';


export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image source={require('../../../assets/data/welcome.png')} className=" w-full aspect-square self-center " />
      <Text className="text-3xl font-semibold mt-10">WELCOME</Text>
      <Text className="text-2xl mt-5 mb-20">Student </Text>
      <Button2 title='Add details 'onPress={() => router.push('/details')} ></Button2>
    
    </View>
  );
}
