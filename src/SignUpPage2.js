import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signup } from './api/Signup';
import { getEmailValidation } from './api/EmailValidation';
function SignUpComponent2({ navigation }) {
    const { name, graduationYear } = navigation.state.params;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerification, setPasswordVerification] = useState('');
    const [code, setCode] = useState(null);
    const [authCode, setAuthCode] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleEmailValidation = async () => {
        const domain = email.split('@')[1]
        if (domain != 'pupils.nlcsjeju.kr') {
            Alert.alert('이메일 형식이 맞지 않습니다.')
            return
        }
        const result = await getEmailValidation(email);
        const code = result.result.code;
        setCode(code);
        Alert.alert('Please check your email inbox.')
    }

    const handleSignUp = async () => {
        
        // email validation


        const domain = email.split('@')[1]
        if (domain != 'pupils.nlcsjeju.kr') {
            Alert.alert('이메일 형식이 맞지 않습니다.')
            return
        }
        if (code != null && authCode != code) {
            Alert.alert('인증번호가 일치하지 않습니다.')
            return
        }
        // password validation
        if (password != passwordVerification) {
            Alert.alert("Check the password again");
            return;
        }
        // 졸업년도 validation
        const parsedEmail = email.split('@')[0];
        const emailGraduation = parsedEmail.substring(parsedEmail.length - 2, parsedEmail.length);
        if (emailGraduation != graduationYear.substring(2, 4)) {
            Alert.alert("Check the email or graduation year again");
            return;
        }

        // api 요청
        const apiResult = await signup(email, password, name, graduationYear);
        // Login화면으로 이동
        Alert.alert("Sign up success!");
        navigation.navigate('Login');
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
                <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Sign Up</Text>
                <Text style={styles.Title}>court vote system</Text>
                <Text style={styles.Title}>@NLCS.JEJU</Text>
                <Text style={styles.paddingTop40}></Text>
                <Text style={styles.label}>Email</Text>
                <View flexDirection='row'>
                    <TextInput
                        style={styles.input2}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <View style={{ ...styles.buttonNoMargin, marginLeft: 10, }}>
                        <Button title="send" onPress={handleEmailValidation} color='#FFFFFF' />
                    </View>
                </View>
                <Text style={styles.label}>AuthCode</Text>
                <TextInput
                    style={styles.input}
                    value={authCode}
                    onChangeText={(text) => setAuthCode(text)}
                    secureTextEntry={false}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Password Verification</Text>
                <TextInput
                    style={styles.input}
                    value={passwordVerification}
                    onChangeText={(text) => setPasswordVerification(text)}
                    secureTextEntry={true}
                />
                <View style={styles.button}>
                    <Button title="Sign Up" onPress={handleSignUp} color='#FFFFFF' />
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignUpComponent2;
