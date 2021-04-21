import React, { useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
} from 'react-native'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'

export function Welcome() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie {'\n'} suas plantas {'\n'} de forma fácil
            </Text>

            <Image source={wateringImg} style={style.image}></Image>

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar
                você sempre que precisar.
            </Text>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>{'>'}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 32,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 25,
        paddingHorizontal: 20,
        fontWeight: '400',
        color: colors.heading,
    },
    image: {
        width: 150,
        height: 120,
    },

    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        padding: 10,
        height: 56,
        minWidth: 56,
    },

    buttonText: {
        color: colors.white,
        fontSize: 24,
    },
})
