import AsyncStorage from '@react-native-async-storage/async-storage';

async function getJWTToken() {
    const loginInfo = JSON.parse(await AsyncStorage.getItem('loginInfo'));
    return loginInfo.jwtToken;
}

module.exports = {
    getJWTToken,
};