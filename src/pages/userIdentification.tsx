import React, { useState } from 'react'
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    View,
    TextInput,
    Platform,
} from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Entypo } from '@expo/vector-icons'
import { Buton } from '../components/button'

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false)

    const [isFilled, setIsFilled] = useState(false)

    const [name, setName] = useState<string>()

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!name)
    }

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputChanges(value: string) {
        setIsFilled(!!value)
        setName(value)
    }

    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView
                style={style.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={style.content}>
                    <View style={style.form}>
                        <Text style={style.emoji}>
                            {isFilled ? '😄' : '😀'}
                        </Text>
                        <Text style={style.title}>
                            Como podemos {'\n'} chamar você?
                        </Text>
                        <TextInput
                            style={[
                                style.input,
                                (isFocused || isFilled) && style.isFocused,
                            ]}
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChanges}
                        />
                        <View style={style.footer}>
                            <Buton></Buton>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
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
        borderColor: colors.gray,
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
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20,
    },
    isFocused: {
        borderColor: colors.green,
    },
})
