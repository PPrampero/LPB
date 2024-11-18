import {StyleSheet,Text, View } from 'react-native';

export default function Tela3() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Tela 3 - Uma tela normal.....</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
        color: 'red',
        fontSize:24,
    }
  });