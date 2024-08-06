import { Pressable,Text,View } from "react-native"

type ButtonProps={
    title: string;
    onPress:()=>void;
};

export default function Button2({title,onPress,}: ButtonProps){
    return(
        <View className="">
            <Pressable onPress={onPress} className="bg-blue-600 p-3 rounded-xl w-72 self-center mt-2" >
                <Text className="text-white text-2xl font-bold self-center ">{title}</Text>
            </Pressable>
        </View>
    )
}