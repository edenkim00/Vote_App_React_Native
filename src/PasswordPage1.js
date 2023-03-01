import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { styles } from './styles';
import { getEmailValidation } from './api/EmailValidation';
function PaswordComponent({ navigation }) {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState(null);
    const [authCode, setAuthCode] = useState('');
    const [verified, setVerified] = useState(false);

    const handleEmailValidation = async () => {
        const domain = email.split('@')[1]
        if (domain != 'pupils.nlcsjeju.kr') {
            Alert.alert('This is not a school email.')
            return
        }
        const result = await getEmailValidation(email);
        const code = result.result.code;
        setCode(code);
        Alert.alert('Please check your email inbox.')
    }

    const handleVerify = async () => {

    }

    const handleNextPage = async () => {
        try {
            if (code == null) {
                Alert.alert('Please verify your email ahead.');
                return;
            }
            if (authCode != code) {
                Alert.alert('Auth code is not matched.');
                return;
            }
            if (email == '') {
                Alert.alert('Please retry later.');
                return;
            }
            setVerified(true)
            navigation.navigate('PasswordPage2', { 'email': email });
            return;
        } catch (err) {
            Alert.alert('Please retry later.');
            return;
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
                <Text style={{ ...styles.Title, fontSize: 30, marginBottom: 20 }}>Forgot Password</Text>
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
                    <View style={{ ...styles.buttonNoMargin, marginLeft: 10 }}>
                        <Button title="send" onPress={handleEmailValidation} color='#FFFFFF' />
                    </View>
                </View>
                <Text style={styles.label}>AuthCode</Text>
                <TextInput
                    style={styles.input}
                    value={authCode}
                    onChangeText={(text) => setAuthCode(text)}
                    secureTextEntry={false}
                    editable={!verified}
                />
                <Text style={styles.paddingTop10}></Text>
                <View style={styles.button}>
                    <Button title="Verify" onPress={handleNextPage} color='#FFFFFF' />
                </View>
            </ImageBackground>
        </View>
    );
}

export default PaswordComponent;