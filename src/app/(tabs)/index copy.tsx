import { Image, Text, View,TextInput, Pressable} from "react-native"
import { FontAwesome6 } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import Button from "../../components/Button";
export default function create(){
    // now to store the value for other purposes we use usestate
    const [caption, setCaption]=useState('');
    const [image, setImage]=useState<string | null>(null);

    useEffect(()=>{
        if(!image){
            pickImage();
        }
    },[image]);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
    };

    return( 
        <View className="p-3 ">
            <Image source={{
                uri:image,
            }} 
            className=" w-64 aspect-[3/4] rounded-lg self-center bg-slate-400"/>
            <Text onPress={pickImage} className="text-blue-500 self-center text-2xl font-semibold p-3"> Change</Text>
            <TextInput
            value={caption}
            onChangeText={(newValue)=>setCaption(newValue)}
             placeholder="Whats in your mind?" className="w-full"></TextInput>
             <View>
            <Button title="Share" className="w-full bg-blue-500 p-4 items-center mt-80 rounded-xl"/></View>
        </View>
)

}