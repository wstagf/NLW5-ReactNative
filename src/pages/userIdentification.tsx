import React, { useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    View,
    TextInput,
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
                    <Text style={style.title}>
                        Como podemos {'\n'} chamar você?
                    </Text>
                    <TextInput style={style.input} />
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
    content: { flex: 1, width: '100%' },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.green,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 32,
        marginTop: 20,
        fontFamily: fonts.heading,
    },
})
