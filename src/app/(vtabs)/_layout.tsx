import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Redirect } from "expo-router";
import { useAuth } from "../../providers/AuthProvider";
import { RoundCorners } from "@cloudinary/url-gen/actions";
import { StyleSheet } from "react-native";


export default function TabsLayout(){ 
    const {isAuthenticated} = useAuth();
    if (!isAuthenticated){
        return <Redirect href="/(auth)"/>;
    }

   
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:'black',tabBarShowLabel:false ,tabBarStyle:styles.tabBarStyle}}>
        
            <Tabs.Screen name='index' options={{headerTitle:'For you',headerTitleAlign:"center",
                tabBarIcon:({color})=>(
                    <Entypo name="home" size={26} color={color} />
                )
                }}/>
            <Tabs.Screen name='select' options={{headerTitle:'Search',headerTitleAlign:'center',
                tabBarIcon:({color})=>(
                    <FontAwesome6 name="plus-square" size={26} color={color} />
                )
                }}/>    
             <Tabs.Screen name='profile' options={{headerTitle:'Profile',headerTitleAlign:'center',
                tabBarIcon:({color})=>(
                    <FontAwesome6 name="user" size={26} color={color} />
                )
                }}/>  
        </Tabs>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: '#dcdcdc',
      borderRadius: 15,
      height: 60,
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
      paddingBottom: 10,
    },
  });