import { Image, Text, useWindowDimensions, View} from "react-native";
import posts from '../../assets/data/posts.json';
import {AntDesign,Ionicons,Feather} from '@expo/vector-icons';
import { AdvancedImage } from "cloudinary-react-native";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face, FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "../lib/cloudinary";
// create a cloudinary instance and set your cloud name.

export default function Postlistitem({post}){
    const { width,height,scale } = useWindowDimensions();// its used to automatically take the window size but not working.
    
    
    const myImage =cld.image(post.image); 
    myImage.resize(thumbnail().width(393).height(393));  // Crop the image, focusing on the face. 
    //myImage.resize(thumbnail().width(width).height(width)); for automatically using the width and height
    
    const avatar=cld.image(post.user.avatar_url);
    avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));
    
    return(
        <View className="bg-white">
            {/* header part */}
            <View className="p-2 flex-row items-center gap-4">
                <AdvancedImage cldImg={avatar} className="w-12 aspect-square rounded-full"/>
                <Text className="font-semibold">{post.user.username}</Text>
            </View>
            {/* rendering imager from the cloud */}
            <AdvancedImage cldImg={myImage} className="w-full aspect-square"/>
            
            {/*<Image source={{uri: post.image_url}} className="w-full aspect-[3/4] "></Image>*/}

            <View className="flex-row gap-3 p-1">
                <AntDesign name="hearto" size={25}/>
                <Ionicons name="chatbubble-outline" size={25}/>
                <Feather name="send" size={25}/>

                <Feather name="bookmark" size={25} className="ml-72"/>
                
            </View>
        </View>
    )

}