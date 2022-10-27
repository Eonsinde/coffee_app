import React from 'react'
import { Image, Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native'
// import { BlurView } from 'expo-blur'
import { tw } from '../lib/tailwind'
// components import
import Header from '../components/Header';
import SearchField from '../components/SearchField';
import Categories from '../components/Categories';
import Coffees from '../components/Coffees';
// data import
import { coffeeCategory } from '../config/data';
// other screens
import StoreScreen from './StoreScreen';
import WishListScreen from './WishListScreen';
import NotificationsScreen from './NotificationsScreen';




const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = React.useState(coffeeCategory[0]);

    return (
        <SafeAreaView style={[tw`bg-neutral-900 p-3`, { marginTop: StatusBar.currentHeight || 0, flex: 1 }]}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tw`my-3`}>
                    <Text
                        style={tw`text-white text-10 font-semibold`}
                    >
                        Find the best coffee for you
                    </Text>
                </View>
                <SearchField />
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Coffees activeCategory={activeCategory} />
                <View style={tw``}>
                    <Text style={tw`text-white font-semibold text-5 mb-4`}>
                        Special for you
                    </Text>
                    <View style={tw`bg-neutral-700 flex-row justify-between p-3 rounded-xl`}>
                        <Image 
                            style={tw`h-32 w-5/12 rounded-lg`}
                            source={{uri: 'https://coffee.alexflipnote.dev/5GN9Hn9sYLI_coffee.jpg'}}
                        />
                        <Text style={tw`w-7/12 text-white text-4 font-semibold px-3`}>5 Coffee Beans You Must Try</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
