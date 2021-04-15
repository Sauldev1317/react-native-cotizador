import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, SafeAreaView, View, StatusBar, Button} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCaltulation';
import colors from './src/utils/colors';

export default function App() {
      const [capital, setCapital] = useState(0);
      const [interes, setInteres] = useState(0);
      const [meses, setMeses] = useState(0);
      const [total, setTotal] = useState(null);
      const [errorMessage, setErrorMessage] = useState('');

      useEffect(() => {
        if(capital && interes && meses){
          calculate();
        }else{
          reset();
        }
      }, [capital, interes, meses])

      const calculate = () => {
        reset();
        if(!capital){
          setErrorMessage('Añade el capital');
        }else if(!interes){
          setErrorMessage('Añade el interes');
        }else if(!meses){
          setErrorMessage('Añade el plazo de tiempo');
        }else{
          const i = interes / 100;
          const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
          setTotal({
            monthlyFee: fee.toFixed(2).replace(".", ","),
            totalPayable: (fee * meses).toFixed(2).replace(".", ","),
          });
        }
      }

      const reset = () => {
        setErrorMessage("");
        setTotal(null);
      }

          return(
            <>
                <StatusBar backgroundColor={ colors.PRIMARY_COLOR } barStyle="light-content" />
                <SafeAreaView style={ style.safeArea }>
                  <View style={ style.background }/>
                  <Text style={ style.tituloText }>Cotizador de prestamos</Text>
                  <Form 
                    setCapital = {setCapital}
                    setInteres = {setInteres}
                    setMeses = {setMeses}
                  />
                </SafeAreaView>
                <ResultCalculation 
                  capital = {capital}
                  interes = {interes}
                  meses = {meses}
                  total = {total}
                  errorMessage={errorMessage}/>
                <Footer 
                  calculate = {calculate}
                />
            </>
          );
}

const style = StyleSheet.create({
    safeArea: {
      height: 290,
      alignItems: "center"
    },

    background: {
      height: 200,
      width: "100%",
      backgroundColor: colors.PRIMARY_COLOR,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      position: "absolute",
      zIndex: -1
    },

    tituloText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      marginTop: 15,
    },
});