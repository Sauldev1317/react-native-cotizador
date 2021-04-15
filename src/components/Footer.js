import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {

    const { calculate } = props;

    return (
        <View style={styles.footerView}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerView: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },

    textButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },

    button:{
        backgroundColor: colors.ACCENT_COLOR,
        padding: 16,
        width: "75%",
        borderRadius: 10,

    }


})
