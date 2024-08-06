import { Text,View ,Image,TextInput,Pressable} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { TailwindProvider } from "tailwind-rn";
import { supabase } from "../../lib/supabase";



export default function profile(){
    const [image,setImage]=useState<string | null>(null);
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [phone, setPhone]=useState('');
    const [dob, setDob]=useState('');

    {/*useEffect(()=>{
        if(!image){
            pickImage();
        }
    },[image]);*/}

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
        
        <View className='flex-1 p-4'>
                {/* avatar logo */}
                <Image source={{
                    uri:image,
                }} 
                className=" w-64 aspect-[1] rounded-full self-center bg-slate-400"/>
                <Text onPress={pickImage} className="text-blue-500 text-2xl font-semibold p-3 self-center"> Edit</Text>

                {/* form */}
                <Text className="font-semibold mb-2 text-gray-500 ">Username</Text>
                <TextInput className="border border-gray-300 p-2 rounded-lg shadow-lg "
                placeholder="Username"
                value={username}
                onChangeText={(newitem)=>setUsername(newitem)}
                />
                <Text className="font-semibold mb-2 text-gray-500 ">Email</Text>
                <TextInput className="border border-gray-300 p-2 rounded-lg shadow-lg "
                placeholder="Email"
                value={email}
                onChangeText={(newEitem)=>setEmail(newEitem)}
                />
                 <Text className="font-semibold mb-2 text-gray-500 ">Phone</Text>
                <TextInput className="border border-gray-300 p-2 rounded-lg shadow-lg "
                placeholder="phone"
                value={phone}
                onChangeText={(newPitem)=>setPhone(newPitem)}
                />
                 
                <Text className="font-semibold mb-2 text-gray-500 ">dob</Text>
                
                <TextInput className="border border-gray-300 p-2 rounded-lg shadow-lg mb-2 "
                placeholder="dob"
                value={dob}
                onChangeText={(newditem)=>setDob(newditem)}
                />
               
               
                


            {/* Button */}
                < View className="  w-full gap-3 mt-auto">
                    <Button title="Update" className="w-full bg-blue-500 p-4 items-center rounded-xl"/>
                    <Button title="Sign out" className="w-full bg-blue-500 p-4 items-center rounded-xl" onPress={() => supabase.auth.signOut()}/>
                </View>
          
            

        </View>
)
}