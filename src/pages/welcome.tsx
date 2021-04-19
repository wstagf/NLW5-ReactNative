import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';

export function Welcome() {
    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Gerencie suas plantas de forma fácil</Text>
            <Image source={wateringImg} style={style.image}></Image>
            <Text style={style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
sempre que precisar.</Text>
            <TouchableOpacity style={style.button}>
                <Text>
                    Botao
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center', 
      },
      title: {
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.heading,
          lineHeight: 38,
          marginTop: 38
      },
      subtitle: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 25,
        paddingHorizontal: 20,
        fontWeight: '400',
        color: colors.heading        
      },
      button: {
          backgroundColor: colors.green,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          marginBottom: 10,
          width: 56,
          height: 56
      },
      image: {
        width: 292,
        height: 284
      }
    }
  )