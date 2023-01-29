const { apiServerDomain } = require('./constants');

async function signup(email, password, name, graduationYear) {
    const apiUrl = apiServerDomain + '/app/user-signup';
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
        "email": email,
        "password": password,
        "name": name,
        "graduationYear": graduationYear,
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
    };
    const response = await fetch(apiUrl, requestOptions)
    return await response.json()
}

module.exports = {
    signup,
};
