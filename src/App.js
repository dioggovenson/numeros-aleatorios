import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const App = () => {

  const [number, setNumber] = useState(null)
  const [maxValue, setMaxValue] = useState(10)
  const [drawnNumbers, setDrawnNumbers] = useState([])
  const handleNumber = () => {
    let newNumber = Math.floor(Math.random() * (maxValue)) + 1
    const newList = drawnNumbers

    while (drawnNumbers.includes(newNumber)) {
      newNumber = Math.floor(Math.random() * (maxValue)) + 1
    }
    if (!drawnNumbers.includes(newNumber)) {
      setNumber(newNumber)
      console.log("tem não")
      newList.push(newNumber)
      setDrawnNumbers(newList.sort((a, b) => a - b))
    }

  }
  useEffect(()=>{
    setDrawnNumbers([])
  },[maxValue])
  const listNumbers = () => {
    return drawnNumbers.map(num => {
      return (
        <View style={styles.ball} key={num}>
          <Text style={styles.textBall}>{num}</Text>
        </View>
      )
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Gere números aleatórios</Text>
        <Text style={styles.txtMaxValue}>Valor máximo</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMaxValue}
          defaultValue={maxValue.toString()}
          value={maxValue}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.viewNumber}>
        <Text style={styles.numberGen}>{number}</Text>
        <TouchableOpacity onPress={handleNumber} style={styles.btnGen}>
          <Text style={styles.txtBtn}>Gerar número</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.drawnNumbers}>
        
        {drawnNumbers.length > 0 && listNumbers()}
      </View>
      
      <TouchableOpacity onPress={()=>setDrawnNumbers([])} style={styles.btnGen}>
          <Text style={styles.txtBtnClear}>Limpar</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9466ff',
  },
  header: {
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
  txtHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  txtMaxValue: {
    fontWeight: '600',
    fontSize: 24,
    marginTop: 50,
    color: 'white'
  },
  input: {
    margin: 12,
    fontSize: 18,
    width: 50,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
  },
  viewNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberGen: {
    fontSize: 36,
    fontWeight: '600',
    color: 'white'
  },
  btnGen: {
    backgroundColor: '#724fc4',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
  },
  txtBtn: {
    fontSize: 24,
    fontWeight: '600',
    color: '#9466ff'
  },
  txtBtnClear:{
    fontSize: 18,
    fontWeight: '600',
    color: '#9466ff'
  },
  drawnNumbers: {
    flex: 2,
    flexDirection: 'row',
  },
  ball: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    margin: 3
  },
  textBall:{
    fontSize: 24,
    fontWeight: '700',
    color: '#9466ff'
  }


})


export default App;
