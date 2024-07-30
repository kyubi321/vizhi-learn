import { Pressable,Text,View } from "react-native"

type ButtonProps={
    title: string;
    onPress:()=>void;
};

export default function Button({title,onPress,className}: ButtonProps){
    return(
        <View className="">
            <Pressable onPress={onPress} className={className} >
                <Text className="text-white text-2xl font-semibold ">{title}</Text>
            </Pressable>
        </View>
    )
}