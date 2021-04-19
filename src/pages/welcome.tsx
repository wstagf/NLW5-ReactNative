import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image} from "react-native";

import wateringImg from '../assets/watering.png'
import { Button } from '../components/button';
import colors from '../styles/colors';

export function Welcome() {
    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Gerencie {'\n'} suas plantas  {'\n'}  de forma fácil</Text>
            <Image source={wateringImg} style={style.image}></Image>
            <Text style={style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
sempre que precisar.</Text>
            <Button></Button>
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
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          color: colors.heading,
          lineHeight: 32,
          marginTop: 30
      },
      subtitle: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 25,
        paddingHorizontal: 20,
        fontWeight: '400',
        color: colors.heading        
      },
      image: {
        width: 292,
        height: 284
      },
    }
  )