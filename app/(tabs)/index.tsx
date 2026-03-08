import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [value, setValue] = useState('');

  const press = (v: string) => setValue(value + v);

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{value || '0'}</Text>

      <View style={styles.row}>
        <Btn text="7" onPress={() => press('7')} />
        <Btn text="8" onPress={() => press('8')} />
        <Btn text="9" onPress={() => press('9')} />
        <Btn text="+" onPress={() => press('+')} />
      </View>

      <View style={styles.row}>
        <Btn text="4" onPress={() => press('4')} />
        <Btn text="5" onPress={() => press('5')} />
        <Btn text="6" onPress={() => press('6')} />
        <Btn text="-" onPress={() => press('-')} />
      </View>

      <View style={styles.row}>
        <Btn text="1" onPress={() => press('1')} />
        <Btn text="2" onPress={() => press('2')} />
        <Btn text="3" onPress={() => press('3')} />
        <Btn text="=" onPress={calculate} />
      </View>

      <View style={styles.row}>
        <Btn text="0" onPress={() => press('0')} />
        <Btn text="C" onPress={() => setValue('')} />
      </View>
    </View>
  );
}

function Btn({ text, onPress }: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  display: {
    fontSize: 32,
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#333',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
});
