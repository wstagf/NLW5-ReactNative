import React from 'react'
import { View, Text } from 'react-native'
import { Welcome } from './src/pages/welcome'
import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost'
import AppLoading from 'expo-app-loading'
import { UserIdentification } from './src/pages/userIdentification'

export default function App() {
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return <UserIdentification></UserIdentification>
    }
}
