import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground, Alert } from 'react-native';
import { styles } from './styles';
function SignUpComponent({ navigation }) {
    const [name, setName] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const goToSignUpPage2 = async () => {
        if(name == ''){
            Alert.alert('Please enter your name.')
            return
        }
        if(graduationYear == ''){
            Alert.alert('Please enter the graduation year')
            return
        }
        if (graduationYear.length != 4){
            Alert.alert('Please enter the correct graduation year (4 digits)')
            return
        }
        navigation.navigate('SignUpPage2', {name: name, graduationYear: graduationYear});
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
                <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Sign Up</Text>
                <Text style={styles.Title}>court vote system</Text>
                <Text style={styles.Title}>@NLCS.JEJU</Text>
                <Text style={styles.paddingTop40}></Text>
                <Text style={styles.padding10}></Text>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.label}>Graduation Year</Text>
                <TextInput
                    style={styles.input}
                    value={graduationYear}
                    onChangeText={(text) => setGraduationYear(text)}
                />
                <Text style={styles.padding10}></Text>
                <View style={styles.button}>
                    <Button title="Next" onPress={goToSignUpPage2} color='#FFFFFF' />
                </View>
            </ImageBackground>
        </View>
    );
}

export default SignUpComponent;