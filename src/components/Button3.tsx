import { Pressable,Text,View } from "react-native"

type ButtonProps={
    title: string;
    onPress:()=>void;
};

export default function Button3({title,onPress,}: ButtonProps){
    return(
        <View className="">
            <Pressable onPress={onPress} className="bg-blue-600 p-1 rounded-xl w-6 self-center mt-2" >
                <Text className="text-white text-xl font-bold self-center ">{title}</Text>
            </Pressable>
        </View>
    )
}