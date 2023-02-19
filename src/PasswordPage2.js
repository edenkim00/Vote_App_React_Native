import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { styles } from './styles';
import { changePassword } from './api/ChangePassword';
function PaswordComponent({ navigation }) {
    const { email } = navigation.state.params;
    const [password, setPassword] = useState('');
    const [passwordVerification, setPasswordVerification] = useState('');

    const handleChangePassword = async () => {
        // validation
        if (password.length < 4 || password.length > 12) {
            Alert.alert('비밀번호는 4-12글자여야 합니다')
            return
        }
        // api 요청
        const apiResult = await changePassword(email, password);
        if (apiResult.code == 1000) {
            Alert.alert('Successfully Change Password!');
            navigation.navigate('Login')
        } 
        else if (apiResult.code == 1003) {
            Alert.alert("The length of the password should be 4-12 characters.");
            return;
        }
        else {
            Alert.alert('Failed to change password. Retry later.');
            return;
        }
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
                <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Forgot Password</Text>
                <Text style={styles.Title}>court vote system</Text>
                <Text style={styles.Title}>@NLCS.JEJU</Text>
                <Text style={styles.paddingTop40}></Text>
                <Text style={styles.label}>New Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>New Password Verification</Text>
                <TextInput
                    style={styles.input}
                    value={passwordVerification}
                    onChangeText={(text) => setPasswordVerification(text)}
                    secureTextEntry={true}
                />
                <View style={styles.button}>
                    <Button title="Change Password" onPress={handleChangePassword} color='#FFFFFF' />
                </View>
            </ImageBackground>
        </View>
    );
}

export default PaswordComponent;