import { Text,View } from "react-native";

import { createNativeStackNavigator} from "@react-navigation/native-stack"
import { NativeScreenNavigationContainer } from "react-native-screens";
import React from "react";
import {home} from '../vizhi-learn/src/app/(tabs)/home';

const Stack = createNativeStackNavigator()
export default function App(){
    return(
        <NativeScreenNavigationContainer>
            <Stack.Navigator initialRouteName="home">

            </Stack.Navigator>
        </NativeScreenNavigationContainer>

    )
}



