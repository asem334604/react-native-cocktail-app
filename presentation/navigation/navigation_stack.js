import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import SplashScreen from "./SplashScreen";

const Stack = createNativeStackNavigator();

export const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash"
                              component={SplashScreen}
                              options={{
                                  headerShown: false,
                                  headerBackVisible: false,
                                  headerTransparent: true
                              }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                    headerShown: false,
                    headerBackVisible: false,
                    headerTransparent: true
                }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};



