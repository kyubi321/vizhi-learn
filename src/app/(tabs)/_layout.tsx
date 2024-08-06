import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Redirect } from "expo-router";
import { useAuth } from "../../providers/AuthProvider";


export default function TabsLayout(){ 
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated){
        return <Redirect href="/(auth)"/>;
    }

    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'black',tabBarShowLabel:false}}>
        
            <Tabs.Screen name='index' options={{headerTitle:'For you',headerTitleAlign:"center",
                tabBarIcon:({color})=>(
                    <Entypo name="home" size={26} color={color} />
                )
                }}/>
            <Tabs.Screen name='index copy' options={{headerTitle:'Create Post',headerTitleAlign:'center',
                tabBarIcon:({color})=>(
                    <FontAwesome6 name="plus-square" size={26} color={color} />
                )
                }}/>    
             <Tabs.Screen name='index copy 2' options={{headerTitle:'Profile',headerTitleAlign:'center',
                tabBarIcon:({color})=>(
                    <FontAwesome6 name="user" size={26} color={color} />
                )
                }}/>  
        </Tabs>
    )
}