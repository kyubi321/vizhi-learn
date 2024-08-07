import {Redirect, Stack} from "expo-router";
import { useAuth } from "../../providers/AuthProvider";

export default function AuthLayout(){
    const {isAuthenticated} = useAuth();
    if (isAuthenticated){
        return <Redirect href= "/(welcome)"  />;
    }

    return <Stack screenOptions={{headerShown:false}}/>;
}