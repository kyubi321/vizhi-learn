import { Image, Text, View} from "react-native";
import posts from '../../assets/data/posts.json';
import {AntDesign,Ionicons,Feather} from '@expo/vector-icons';

export default function Postlistitem({post}){

    return(
        <View className="bg-white">
            {/* header part */}
            <View className="p-2 flex-row items-center gap-4">
                <Image source={{uri: post.user.image_url}} className="w-12 aspect-square rounded-full"/>
                <Text className="font-semibold">{post.user.username}</Text>
            </View>
            
            <Image source={{uri: post.image_url}} className="w-full aspect-[3/4] "></Image>
            <View className="flex-row gap-3 p-1">
                <AntDesign name="hearto" size={25}/>
                <Ionicons name="chatbubble-outline" size={25}/>
                <Feather name="send" size={25}/>

                <Feather name="bookmark" size={25} className="ml-72"/>
                
            </View>
        </View>
    )

}