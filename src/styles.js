import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  padding: {
    marginBottom: 50,
    marginTop: 50,
  },
  paddingTop40: {
    marginBottom: 40,
    marginTop: 0,
  },
  paddingTop: {
    marginTop: 50,
  },
  padding10: {
    marginBottom: 10,
    marginTop: 10,
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
  input2: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 8,
    fontSize: 15,
    width: '60%',
    marginBottom: 40,
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    borderColor: '#00FFFF',
    width: '30%',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonNoMargin: {    
    marginTop: 0,
    marginBottom: 40,
    borderColor: '#AAFF',
    width: '20%',
    borderWidth: 2,
    borderRadius: 10,
  },
  button_signup: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 10,
    borderColor: '#AAFF',
    width: '30%',
    borderWidth: 2,
    borderRadius: 10,
  },
  button_forgotPassword: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: '#AABB',
    width: '60%',
    borderWidth: 2,
    borderRadius: 10,
  },
  mypage_text: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: '#FFFFFF',
    marginTop: 30,
    marginBottom: 10,
    fontSize: 20,
    borderColor: '#AAFF',
    borderRadius: 10,
    borderWidth: 2,
    width: '70%',
  },
  mypage_text_loading: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20,
  },
});

module.exports = {
  styles,
}
