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
    const [verified, setVerified] = useState(false);

    const handleEmailValidation = async () => {
        try {
            const domain = email.split('@')[1]
            if (domain != 'pupils.nlcsjeju.kr') {
                Alert.alert('이메일 형식이 맞지 않습니다.')
                return
            }
            const result = await getEmailValidation(email);
            const code = result.result.code;
            setCode(code);
            Alert.alert('Please check your email inbox.')
        } catch (err) {
            Alert.alert('Please retry later.');
        }
    }
    const handleVerify = async () => {
        try {
            if (code == null) {
                Alert.alert('Please verify your email ahead.');
                return;
            }
            if (authCode == code) {
                setVerified(true)
                Alert.alert('Verified.');
                return;
            }
            Alert.alert('Auth code is not matched.');
            return;
        } catch (err) {
            Alert.alert('Please retry later.');
            return;
        }
    }

    const handleSignUp = async () => {
        try {
            // email validation
            const domain = email.split('@')[1]
            if (domain != 'pupils.nlcsjeju.kr') {
                Alert.alert('Unauthorized email.')
                return
            }
            if (!verified) {
                Alert.alert('Please verify your email ahead.');
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

            const apiResult = await signup(email, password, name, graduationYear);
            Alert.alert("Sign up success!");
            navigation.navigate('Login');
        } catch (err) {
            Alert.alert('Please retry later.');
            return;
        }
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
                <View flexDirection='row'>
                    <TextInput
                        style={styles.input2}
                        value={authCode}
                        onChangeText={(text) => setAuthCode(text)}
                        secureTextEntry={false}
                        editable={!verified}
                    />
                    <View style={{ ...styles.buttonNoMargin, marginLeft: 10, }}>
                        <Button title="verify" onPress={handleVerify} color='#FFFFFF' />
                    </View>
                </View>

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
