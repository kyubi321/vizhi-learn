import React from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../../components/searchBar';
import InstitutionCard from '../../components/institutioncard';

const institutions = [
  {
    name: "Marian Public School",
    rating: 4.5,
    reviews: 413,
    field: "Bio Science",
    description: "Studying how CBD awareness and availability as it related to pain management alternatives.",
    image: require('../../../assets/data/Group 65.png')
  },
  {
    name: "ST Mary's HS School Vizhinjam",
    rating: 4.1,
    reviews: 354,
    field: "Bio Science",
    description: "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",
    image: require('../../../assets/data/Group 65.png')
  },
  {
    name: "Shanthinikethan Public School",
    rating: 3.0,
    reviews: 745,
    field: "Bio Science",
    description: "This is a private higher education center which conducting classes for GCE AL Students.",
    image: require('../../../assets/data/Group 65.png')
  }
];

const HomeScreen = () => {
  return (
    <View className ='flex-1 bg-gray-100'>
      <SearchBar />
      <ScrollView>
        {institutions.map((institution, index) => (
          <InstitutionCard
            key={index}
            name={institution.name}
            rating={institution.rating}
            reviews={institution.reviews}
            field={institution.field}
            description={institution.description}
            image={institution.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
