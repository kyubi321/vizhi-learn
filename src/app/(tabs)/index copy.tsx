import { Image, Text, View,TextInput, Pressable} from "react-native"
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from "react";

export default function create(){
    // now to store the value for other purposes we use usestate
    const [caption, setCaption]=useState('');

    return( 
        <View className="p-3 items-center">
            <Image source={{
                uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg',
            }} 
            className=" w-64 aspect-[3/4] rounded-lg"/>
            <Text onPress={()=>{}} className="text-blue-500 text-2xl font-semibold p-3"> Change</Text>
            <TextInput
            value={caption}
            onChangeText={(newValue)=>setCaption(newValue)}
             placeholder="Whats in your mind?" className="w-full"></TextInput>
            <Pressable className="w-full bg-blue-500 p-4 items-center mt-80 rounded-xl" >
                <Text className="text-white text-2xl font-semibold ">Share </Text>
            </Pressable>
        </View>
)

}