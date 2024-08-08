import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';
import FilterButton from '../../components/filterb';
import InstitutionCard from '../../components/institiclg';
import { FontAwesome6 } from '@expo/vector-icons';
import SearchBar from '../../components/searchBar';
import {useRouter } from 'expo-router';

const HomeScreen = () => {
    const router = useRouter();
  const [activeAreaFilter, setActiveAreaFilter] = useState('Near');
  const [activeTypeFilter, setActiveTypeFilter] = useState('All');
  const [activeCourseFilter, setActiveCourseFilter] = useState('All');

  const institutions = [
    {
      name: "Christ College",
      rating: 4.7,
      reviews: 41,
      address: "9XWR+2J, 695523, Kalluvettankuzhy, Vizhinjam, Venganoor, Kerala 695523",
      image: require('../../../assets/data/Group 65.png'),
      onPress:()=>router.push('')
    },
    {
      name: "Digital University Kerala",
      rating: 4.1,
      reviews: 354,
      address: "Technocity Campus Mangalapuram Thonnakkal P.O, Kerala 695317",
      image: require('../../../assets/data/Group 65.png'),
      onPress:()=>router.push('/digi')
    },
    {
      name: "University of Kerala",
      rating: 3.0,
      reviews: 745,
      address: "Senate House Campus, Palayam, Thiruvananthapuram, Kerala 695034",
      image: require('../../../assets/data/Group 65.png'),
      onPress:()=>router.push('')
    }
  ];

  return (
    <View className={`flex-1 bg-gray-100 mt-5`}>
      {/* Header */}
      <View className={`flex-row items-center p-4`}>
        <Pressable onPress={()=> router.back()}>
          <Feather name="chevron-left" size={24} color="black" />
        </Pressable>
        <Text className={`text-3xl font-bold ml-4  `}>College</Text>
        <View className={`flex-1 items-end`}>

        </View>
      </View>
      <SearchBar></SearchBar>

      {/* Filter Section */}
      <View className={`p-4`}>
        <Text className={`text-xl font-semibold mb-2`}>Popular Institution</Text>

        <Text className={`text-gray-500 font-semibold text-xl`}>Area</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className={`mt-2 ml-2`}>
          {['Near', 'Districts', 'State'].map((label) => (
            <FilterButton 
              key={label}
              label={label}
              isActive={activeAreaFilter === label }
              onPress={() => setActiveAreaFilter(label)}
            />
          ))}
        </ScrollView>

        <Text className={`text-gray-500 mt-4`}>Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className={`mt-2`}>
          {['All', 'Government', 'Private'].map((label) => (
            <FilterButton
              key={label}
              label={label}
              isActive={activeTypeFilter === label}
              onPress={() => setActiveTypeFilter(label)}
            />
          ))}
        </ScrollView>

        <Text className={`text-gray-500 mt-4`}>Courses</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className={`mt-2`}>
          {['All', 'Bsc', 'BA', 'More..'].map((label) => (
            <FilterButton
              key={label}
              label={label}
              isActive={activeCourseFilter === label}
              onPress={() => setActiveCourseFilter(label)}
            />
          ))}
        </ScrollView>
      </View>

      {/* Institution List */}
      <ScrollView >
        {institutions.map((institution, index) => (
          <InstitutionCard 
            key={index}
            name={institution.name}
            rating={institution.rating}
            reviews={institution.reviews}
            address={institution.address}
            image={institution.image}
            
            
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
