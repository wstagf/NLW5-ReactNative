import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from "react-native";

import wateringImg from '../assets/watering.png'

export function Welcome() {
    return(
        <SafeAreaView style={style.container}>
            <Text style={style.heading}>Gerencie suas plantas de forma fácil</Text>
            <Image source={wateringImg}></Image>
            <Text style={style.subHeading}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
sempre que precisar.</Text>
            <TouchableOpacity>
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
        padding: 50
      },
      heading: {
          fontWeight: '600',
          fontSize: 32,
          lineHeight: 38,
          textAlign: 'center'
      },
      subHeading: {
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 25,
        textAlign: 'center'
      }
    }
  )