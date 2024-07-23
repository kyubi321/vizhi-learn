import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabsLayout(){ 
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'black',tabBarShowLabel:false}}>
        
            <Tabs.Screen name='index' options={{headerTitle:'for you',
                tabBarIcon:({color})=>(
                    <Entypo name="home" size={26} color={color} />
                )
                }}/>
            <Tabs.Screen name='index copy' options={{headerTitle:'create post',
                tabBarIcon:({color})=>(
                    <FontAwesome6 name="plus-square" size={26} color={color} />
                )
                }}/>    
             <Tabs.Screen name='index copy 2' options={{headerTitle:'profile',
                tabBarIcon:({color})=>(
                    <FontAwesome6 name="user" size={26} color={color} />
                )
                }}/>  
        </Tabs>
    )
}