import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ onChangeText, placeholder, value, secureTextEntry }) => {
    const { containerStyle, inputStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}; 

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 30,
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000',
        borderRadius: 5,
        borderWidth: 0.1
    },
};


export { Input };
