import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    padding: {
      marginBottom: 50,
      marginTop: 50,
    },
    Title: {
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      marginBottom: 10,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      color: 'yellow',
      marginBottom: 8,
      fontSize: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'white',
      color: 'white',
      padding: 8,
      fontSize: 15,
      width: '80%',
      marginBottom: 20,
    },
    button: {
      marginTop: 30,
      marginBottom: 10,
      borderColor: '#00FFFF',
      width: '30%',
      borderWidth: 2,
      borderRadius: 10,
    },
  });

  module.exports = {
    styles,
  }
