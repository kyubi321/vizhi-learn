import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Pressable } from 'react-native';
import Button3 from '../../components/Button2';
import { router } from 'expo-router';

export default function Home(){
    return(
        <ScrollView className='bg-white p-2' >
        <View className='p-4'>
          {/* Profile Section */}
          <View className='flex-row items-center justify-between  bg-slate-300 rounded-xl p-2'>
            <View>
              <Text className='text-4xl  text-blue-700 font-bold'>Good morning!</Text>
              <Text className='text-2xl'>Student </Text>
            </View>
            <Image
              source={require('../../../assets/data/Rectangle 32.png')}
              className='w-32 h-32  mt-2 '
            />
          </View>
  
          {/* Profile Button */}
          {/*<Button3 title='profile' onPress={()=>router.push('/profile')}></Button3>*/}
          <View className="">
            <Pressable onPress={()=> router.push('/profile')} className="bg-blue-700 p-2 rounded-xl w-24 self-center mt-2 mr-80" >
                <Text className="text-white text-2xl font-bold self-center ">Profile</Text>
            </Pressable>
        </View>
  
          {/* Cards Section */}
          <View className=''>
            <Pressable>
              <Image
                source={ require('../../../assets/data/Mask group.png')}
                className='w-full h-32 rounded-3xl mt-7 mb-7'
              />
              </Pressable>
        
  
            <TouchableOpacity>
              <Image
                source={require('../../../assets/data/mask.png')}
                className='w-full h-32 rounded-xl bg-slate-500'
              />
            </TouchableOpacity>
          </View>
  
          {/* Buttons Section */}
          <View className='mt-4 flex-row flex-wrap justify-between'>
            {[
              { title: 'Notifications', icon: 'notification_icon_url' },
              { title: 'Support       ', icon: 'support_icon_url' },
              { title: 'School      ', icon: 'school_icon_url' },
              { title: 'College        ', icon: 'college_icon_url' },
              { title: 'Scholarship', icon: 'scholarship_icon_url' },
              { title: 'Map           ', icon: 'map_icon_url' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                className='w-1/2 p-2'
              >
                <View
                  className='bg-blue-600 rounded-lg p-4 flex-row items-center justify-between mt-4'
                >
                  <Text className='text-white text-xl font-bold mt-8'>{item.title}</Text>
                  <Image
                    source={{ uri: item.icon }}
                    className=' h-20'
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

    )
}