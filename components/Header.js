import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Icon } from '@rneui/themed'
import { tw } from '../lib/tailwind'

const avatar = require('../assets/avatar.jpg');


const Header = () => {
  return (
    <View
        style={tw`flex-row justify-between pb-2`}
    >
        <TouchableOpacity
            style={tw`bg-neutral-800 w-12 rounded-xl flex-row items-center justify-center`}
        >
            <Icon
                name="menu" 
                color="gray" 
            />
        </TouchableOpacity>
        <View
            style={tw`border-4 border-neutral-800 rounded-xl h-12 w-12 overflow-hidden`}
        >
            <Image
                style={tw`h-full w-full`}
                source={avatar}
            />
        </View>
    </View>
  )
}

export default Header