import React from 'react'
import { View, Text, TextInput } from 'react-native'
import tw from 'twrnc'
import { Icon } from '@rneui/base'


const SearchField = () => {
  return (
    <View 
        style={tw`bg-neutral-700 rounded-xl flex-row items-center mb-3 px-3`}
    >
        <Icon
            style={tw``}
            name='search'
            color='gray'
        />
        <TextInput 
            style={tw`w-full text-white text-4 py-2 px-3 `} 
            placeholder="Find Your Coffee..."
            placeholderTextColor={'gray'}
        />
    </View>
  )
}

export default SearchField