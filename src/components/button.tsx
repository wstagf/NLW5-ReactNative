import React from 'react';
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import colors from '../styles/colors';

interface ButtonProps {
    title: string
}

export function Button({title} : ButtonProps) {
    return(
        <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create(
    {
    
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
      },
      buttonText: {
          color: colors.white,
          fontSize: 24
      }
    }
  )