import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCaltulation(props) {
    const {capital, interes, meses, total, errorMessage} = props;
    return (
        <View style={styles.content}>
           {total &&  (
               <View style={styles.boxResult}>
                   <Text style={styles.titulo}>Resumen</Text>
                  <DataResults title="Cantidad solicitada" value={`${capital} $`}/>
                  <DataResults title="Interes" value={`${interes} %`}/>
                  <DataResults title="Plazos:" value={`${meses} meses`}/>
                  <DataResults title="Pago mensual" value={`${total.monthlyFee} $`}/>
                  <DataResults title="Total a pagar" value={`${total.totalPayable} $`}/>
               </View>
           )}
           <View>
            <Text style={styles.error}>{errorMessage}</Text>
           </View>
        </View>
    )
}

function DataResults(props){
    const {title, value} = props;
    return (
        <View style={styles.value}>
            <Text>{title}</Text>
            <Text>{value}</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30,
    },
    titulo: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },
    value:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginBottom: 20,
    },
    error: {
        textAlign: "center",
        color: "red",
        fontWeight:"bold",
        fontSize: 20,
    }
})
