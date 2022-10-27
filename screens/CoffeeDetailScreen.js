import React from 'react'
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { Icon } from '@rneui/themed'
import { tw } from '../lib/tailwind'


const SIZES = ['S', 'M', 'L']

const CoffeeDetailScreen = ({ route, navigation }) => {
    const coffeeInfo = route.params

    const [coffeeSize, setCoffeeSize] = React.useState(null)

    return (
        <SafeAreaView style={[tw`bg-neutral-900`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
            <ImageBackground 
                style={tw`flex-1 justify-between overflow-hidden`}
                source={{uri: coffeeInfo.image}}
                imageStyle={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <View style={tw`flex-row justify-between items-center p-4`}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={tw`bg-neutral-800 p-3 rounded-lg`}
                    >
                        <Icon
                            name='arrow-back'
                            type='ionicon'
                            color='#fff'
                            size={18}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`bg-neutral-800 p-3 rounded-lg`}
                    >
                        <Icon
                            style={tw``}
                            name='heart'
                            color='white'
                            type='font-awesome'
                            size={18}
                        />
                    </TouchableOpacity>
                    {/* <Text>CoffeeDetailScreen {coffeeInfo.name}</Text> */}
                </View>
                <View style={tw`bg-app-transparent-dark flex-row justify-between p-4 rounded-2xl`}>
                    <View style={tw`w-7/12`}>
                        <Text
                            style={tw`text-white text-6 font-bold mb-1`}
                        >
                            { coffeeInfo.name }
                        </Text>
                        <Text
                            style={tw`text-neutral-400 text-3 font-semibold`}
                        >
                            { coffeeInfo.included }
                        </Text>
                        <View style={tw`flex-row items-center mt-6`}>
                            <Icon 
                                name='star'
                                color='#fb923c'
                            />
                            <Text style={tw`text-white ml-1`}>{ coffeeInfo.rating }</Text>
                        </View>
                    </View>
                    <View style={tw`w-5/12`}>
                        <View style={tw`flex-row justify-between`}>
                            <View
                                style={tw`bg-neutral-800 py-2 px-4 items-center rounded-xl items-center justify-center`}
                            >
                                <Icon 
                                    name='cafe'
                                    type='ionicon'
                                    color='#fb923c'
                                />
                                <Text
                                    style={tw`text-neutral-400 text-3`}
                                >
                                    Coffee
                                </Text>
                            </View>
                            <View
                                style={tw`bg-neutral-800 py-2 px-4 items-center rounded-xl items-center justify-center`}
                            >
                                <Icon 
                                    name='water'
                                    type='ionicon'
                                    color='#fb923c'
                                />
                                <Text
                                    style={tw`text-neutral-400 text-3`}
                                >
                                    Milk
                                </Text>
                            </View>
                            
                        </View>
                        <View style={tw`mt-3`}>
                            <Text style={tw`bg-neutral-800 rounded-xl text-3 tracking-wide text-neutral-400 text-center p-2`}>
                                Medium Roasted
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            {/* other details on the coffee instance */}
            <View style={tw`flex-1 pt-4 px-3`}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View>
                        <Text style={tw`text-white text-5 font-bold mb-3`}>Description</Text>
                        <Text style={tw`text-neutral-400 text-justify text-4 leading-relaxed`}>
                            { coffeeInfo.description?.trim() }{'. '}
                            {/* { coffeeInfo.description?.trim() } */}
                        </Text>
                    </View>
                    <View style={tw`mt-4`}>
                        <Text style={tw`text-white text-5 font-bold mb-1`}>Size</Text>
                        <View style={tw`flex-row justify-between my-3`}>
                        {
                            SIZES.map((size, index) => (
                                <TouchableOpacity key={index}
                                    onPress={() => setCoffeeSize(size)}
                                    style={tw`border-2 ${size === coffeeSize ? 'border-orange-400' : 'bg-neutral-700 border-neutral-700' }  w-3/12 p-3 rounded-xl`}
                                >
                                    <Text
                                        style={tw`text-white text-center`}
                                    >
                                        {size}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                        </View>
                    </View>
                </ScrollView>
                <View style={tw`flex-row justify-between py-3 px-2 border-t-2 border-app-transparent-dark`}>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-neutral-400`}>Price</Text>
                        <View style={tw`flex-row`}> 
                            <Text style={tw`text-orange-400 mr-1 text-5`}>$</Text>
                            <Text style={tw`text-white text-5`}>{coffeeInfo.price}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={tw`flex-2 bg-orange-400 p-3 rounded-xl justify-center`}
                    >
                        <Text style={tw`text-white text-center`}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    ) 
}

export default CoffeeDetailScreen