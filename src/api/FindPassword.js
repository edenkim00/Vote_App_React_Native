const { apiServerDomain } = require('.constants');

async function findPassword(email, grade, name){
    const apiUrl = `${apiServerDomain}/app/forgot-password?email=${email}&grade=${grade}&name=${name}`;
    const myHeaders = new Headers();

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    const response = await fetch(apiUrl, requestOptions)
    return await response.json()
}

module.exports = {
    findPassword,
};