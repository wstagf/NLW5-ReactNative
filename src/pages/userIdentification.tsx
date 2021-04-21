import React, { useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    View,
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Entypo } from '@expo/vector-icons'

export function UserIdentification() {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.content}>
                <View style={style.form}>
                    <Text style={style.emoji}>😀</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {},
    form: {},
    emoji: {},
})
