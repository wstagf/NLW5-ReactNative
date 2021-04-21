import React from 'react'
import { View, Text } from 'react-native'
import { Welcome } from './src/pages/welcome'
import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold,
} from '@expo-google-fonts/jost'

export default function App() {
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    })

    if (!fontsLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Carregando Fontes...</Text>
            </View>
        )
    } else {
        return <Welcome></Welcome>
    }
}
