import React from 'react'
import {
    View,
    Text,
    Touchable,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import colors from '../../docs/assets_aula01/styles/colors'
import fonts from '../styles/fonts'

export function Buton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Confirmar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,
    },
})
