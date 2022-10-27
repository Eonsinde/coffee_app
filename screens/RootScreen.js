import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// screens
import HomeScreen from './HomeScreen';
import CoffeeDetailScreen from './CoffeeDetailScreen';


const Stack = createNativeStackNavigator();

const RootScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="CoffeeDetailScreen" component={CoffeeDetailScreen} options={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
        </Stack.Navigator>
    )
}

export default RootScreen