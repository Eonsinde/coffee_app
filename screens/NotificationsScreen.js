import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { tw } from '../lib/tailwind'


const NotificationsScreen = () => {
  return (
    <SafeAreaView style={[tw`bg-neutral-900 p-3`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
        <View>
        <Text>NotificationsScreen</Text>
        </View>
    </SafeAreaView>
  )
}

export default NotificationsScreen