import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';

import { Feather } from '@expo/vector-icons';
import FilterButton from '../../components/filterb';
import InstitutionCard from '../../components/institiclg';
import { FontAwesome6 } from '@expo/vector-icons';
import SearchBar from '../../components/searchBar';
import { router } from 'expo-router';

const HomeScreen = () => {
  const [activeAreaFilter, setActiveAreaFilter] = useState('Near');
  const [activeTypeFilter, setActiveTypeFilter] = useState('All');
  const [activeCourseFilter, setActiveCourseFilter] = useState('All');

  const institutions = [
    {
      name: "Loyola School",
      rating: 4.8,
      reviews: 120,
      address: "Sreekariyam, Thiruvananthapuram, Kerala 695017",
      image: require('../../../assets/data/Group 65.png') // Update image path if needed
    },
    {
      name: "St. Thomas Residential School",
      rating: 4.5,
      reviews: 98,
      address: "Mukkola, Thiruvananthapuram, Kerala 695043",
      image: require('../../../assets/data/Group 65.png') // Update image path if needed
    },
    {
      name: "Chinmaya Vidyalaya",
      rating: 4.6,
      reviews: 85,
      address: "Chinmaya Gardens, Trichur Road, Thrissur, Kerala 680021",
      image: require('../../../assets/data/Group 65.png') // Update image path if needed
    },
    {
      name: "Rajagiri Public School",
      rating: 4.7,
      reviews: 110,
      address: "Kalamassery, Kochi, Kerala 683104",
      image: require('../../../assets/data/Group 65.png') // Update image path if needed
    },
    {
      name: "Saraswathi Vidyalaya",
      rating: 4.4,
      reviews: 60,
      address: "Vattiyoorkavu, Thiruvananthapuram, Kerala 695013",
      image: require('../../../assets/data/Group 65.png') // Update image path if needed
    }
  ];
  

  return (
    <View className={`flex-1 bg-gray-100 mt-5`}>
      {/* Header */}
      <View className={`flex-row items-center p-4`}>
        <Pressable onPress={()=>router.back()}>
          <Feather name="chevron-left" size={24} color="black" />
        </Pressable>
        <Text className={`text-3xl font-bold ml-4  `}>School</Text>
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
          {['All', 'STATE', 'ICSC', 'CBSC'].map((label) => (
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
          {['All', 'science', 'commerce', 'More..'].map((label) => (
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
      <ScrollView>
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
