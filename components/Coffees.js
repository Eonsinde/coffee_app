import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native'
// import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import { tw } from '../lib/tailwind'
import { coffeeList } from '../config/data';



const Coffees = ({ activeCategory }) => {
    const navigation = useNavigation()

    // (TODO): Make request to fetch coffees

    return (
        <View style={tw`flex-row flex-wrap justify-between my-3`}>
            {
                activeCategory && activeCategory?.name !== 'All'
                ?
                coffeeList
                .filter(coffee => (activeCategory?.name === coffee.category) ? true : false)
                .map(coffee => (
                    <View 
                        key={coffee.id}
                        style={tw`bg-neutral-800 w-40 rounded-3xl overflow-hidden p-2 mb-3`}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CoffeeDetailScreen", {...coffee})}
                            style={tw`w-full h-42  rounded-2xl overflow-hidden`}
                        >
                            <Image
                                style={tw`w-full h-full`}
                                source={{ uri: coffee.image}}
                            />
                            <View 
                                style={tw`bg-neutral-800 flex-row items-center justify-between absolute right-0 z-50 py-1 px-3 overflow-hidden rounded-bl-3xl`}
                            >
                                <Icon
                                    name="star" 
                                    color="#fb923c" 
                                />
                                <Text style={tw`text-white ml-1`}>
                                    { coffee.rating }
                                </Text>
                            </View>
                            
                        </TouchableOpacity>
                        <View style={tw`bg-neutral-800 py-1 px-2`}>
                            <Text
                                style={tw`text-white font-semibold text-4 mb-[0.1rem]`}
                            >
                                { coffee.name }
                            </Text>
                            <Text
                                style={tw`text-white text-3 text-app-gray`}
                            >
                                { coffee.included }
                            </Text>
                        </View>
                        <View style={tw`flex-row py-2 px-2 justify-between`}>
                            <Text style={tw`text-white`}>
                                ${ coffee.price }
                            </Text>
                            <View style={tw`bg-orange-400 rounded-md`}>
                                <Icon 
                                    name='add'
                                    color='white'
                                />
                            </View>
                        </View>
                    </View>
                ))
                :
                coffeeList.map(coffee => (
                    <View 
                        key={coffee.id}
                        style={tw`bg-neutral-800 w-40 rounded-3xl overflow-hidden p-2 mb-3`}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("CoffeeDetailScreen", {...coffee})}
                            style={tw`w-full h-42  rounded-2xl overflow-hidden`}
                        >
                            <Image
                                style={tw`w-full h-full`}
                                source={{ uri: coffee.image}}
                            />
                            <View 
                                style={tw`bg-neutral-800 flex-row items-center justify-between absolute right-0 z-50 py-1 px-3 overflow-hidden rounded-bl-3xl`}
                            >
                                <Icon
                                    name="star" 
                                    color="#fb923c" 
                                />
                                <Text style={tw`text-white ml-1`}>
                                    { coffee.rating }
                                </Text>
                            </View>
                            
                        </TouchableOpacity>
                        <View style={tw`bg-neutral-800 py-1 px-2`}>
                            <Text
                                style={tw`text-white font-semibold text-4 mb-[0.1rem]`}
                            >
                                { coffee.name }
                            </Text>
                            <Text
                                style={tw`text-white text-3 text-app-gray`}
                            >
                                { coffee.included }
                            </Text>
                        </View>
                        <View style={tw`flex-row py-2 px-2 justify-between`}>
                            <Text style={tw`text-white`}>
                                ${ coffee.price }
                            </Text>
                            <View style={tw`bg-orange-400 rounded-md`}>
                                <Icon 
                                    name='add'
                                    color='white'
                                />
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default Coffees