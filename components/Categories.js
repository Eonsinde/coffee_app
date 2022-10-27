import React, { useEffect } from 'react'
import { Text, FlatList, TouchableOpacity, View } from 'react-native'
// import tw from 'twrnc'
import { tw } from '../lib/tailwind'
import { coffeeCategory } from '../config/data'


const Categories = ({ activeCategory, setActiveCategory }) => {
    // const [activeCategory, setActiveCategory] = React.useState(null);
    const [coffeeData, setCoffeeData] = React.useState(null);

    // (TODO) : Implement coffee fetching based on changes to activeCategory
    useEffect(() => {
        // 1: make the request

        // 2: set the coffeeData state with new data

    }, [activeCategory])

    return (
        <View style={tw`px-2 my-2`}>
            <FlatList 
                data={coffeeCategory}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => { setActiveCategory(item) }}
                    >
                        <View style={tw`items-center mr-7`}>
                            <Text style={[{color: 'gray'}, tw`text-4 ${(activeCategory?.id === item.id) && 'text-orange-400'}`]}>
                                { item.name }
                            </Text>
                            {
                                (activeCategory?.id === item.id) &&
                                <View
                                    style={tw`h-2 w-2 mt-1 bg-orange-400 rounded-full`}
                                />
                            }
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Categories