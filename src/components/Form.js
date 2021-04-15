import React, { useState } from 'react';
import {StyleSheet, TextInput, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
    const {setCapital, setInteres, setMeses} = props;
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={style.viewForm}>
                <View style={style.viewInput}>
                    <TextInput 
                        placeholder="Catidad a pedir"
                        keyboardType="numeric"
                        style={style.textField}
                        onChange={(e) => setCapital(e.nativeEvent.text)}
                    />
                    <TextInput 
                        placeholder="Interes %"
                        keyboardType="numeric"
                        style= {[style.textField, style.textFieldPorcentaje]}
                        onChange={(e) => setInteres(e.nativeEvent.text)}
                    />
                
                </View>
                
                <RNPickerSelect
                    style= { picketSelectetStyles }
                    placeholder={{
                        label: 'Selecciona los meses',
                        value: null
                    }}
                    useNativeAndroidPickerStyle= {false}
                    onValueChange={(value) => setMeses(value)}
                    items={[
                        { label: '3 meses', value: 3 },
                        { label: '6 meses', value: 6 },
                        { label: '12 meses', value: 12 },
                        { label: '24 meses', value: 24 },
                    ]}
                />
            </View>
            </TouchableWithoutFeedback>
        );
}


const style = StyleSheet.create({
    viewForm: {
            position: "absolute",
            bottom: 0,
            width: "80%",
            paddingHorizontal: 40,
            backgroundColor: colors.ACCENT_COLOR,
            borderRadius: 10,
            height: 180,
            justifyContent: "center",      
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 10,
            elevation: 3,
    },

    viewInput:{
        flexDirection: "row",
    },

    textField: {
            height: 50,
            backgroundColor: colors.BACKGROUND_COLOR,
            borderWidth: 1,
            borderColor: "#E1E2E1",
            borderRadius: 5,
            width: "60%",
            marginRight: 5, 
            marginLeft: -5,
            marginBottom: 10,
            color: "#2b2d42",
            paddingHorizontal: 5,
    },

    textFieldPorcentaje: {
            width: "40%",
            marginLeft: 5
    }
});


const picketSelectetStyles = StyleSheet.create({
    inputIOS:{
        fontSize: 16,
    },

    inputAndroid: {
        width: "100%",
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#E1E2E1",
        borderRadius: 5,
        color: "#000",
        backgroundColor: "#fff",
    },
});