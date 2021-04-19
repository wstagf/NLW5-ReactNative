import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, Image} from "react-native";

import wateringImg from '../assets/watering.png'
import { Button } from '../components/button';
import colors from '../styles/colors';

export function Welcome() {

    const [visible, setVisible] = useState(true);

    function handleVisibitityTrue() {
        setVisible(true);
    }

    function handleVisibitityFalse() {
        setVisible(false);
    }

    return(
        <SafeAreaView style={style.container}>
            <Text style={style.title}>Gerencie {'\n'} suas plantas  {'\n'}  de forma fácil</Text>
            {
                visible && <Image source={wateringImg} style={style.image}></Image>
            }            
            <Text style={style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
sempre que precisar.</Text>
            {/* <Button title="Mostrar Imagem" onPress={handleVisibitityTrue}></Button>
            <Button title="Ocultar Imagem" onPress={handleVisibitityFalse}></Button> */}
            <Button title=">"></Button>
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
        width: 150,
        height: 120
      },
    }
  )