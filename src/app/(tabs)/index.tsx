import { Image, Text, View,FlatList, FlatListComponent } from "react-native";
import posts from '../../../assets/data/posts.json';
import {AntDesign,Ionicons,Feather} from '@expo/vector-icons';
import Postlistitem from "../../components/Postlistitem";
import { Cloudinary } from "@cloudinary/url-gen";


export default function New(){
    return(

        // Flatlist for rendering list of items with scrolling capabilites
        // for flatlist we need data, renderitem 

        <FlatList data={posts} className="bg-orange-300" contentContainerStyle={{gap: 10}} showsVerticalScrollIndicator={false} renderItem={({ item }) => <Postlistitem post={item}/> }/>
        
    );

}
