import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from "react-native";
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function Button({title, ...rest} : ButtonProps) {
    return(
        <TouchableOpacity style={style.button} {...rest}>
            <Text style={style.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}



const style = StyleSheet.create(
    {
    
      button: {
          backgroundColor: colors.green,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          marginBottom: 10,
          padding: 10,
          height: 56
      },
      
      buttonText: {
          color: colors.white,
          fontSize: 24
      }
    }
  )