const { apiServerDomain } = require('./constants');

async function getEmailValidation(email) {
    const apiUrl = `${apiServerDomain}/app/email-validation?email=${email}`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
    };
    const response = await fetch(apiUrl, requestOptions)
    return await response.json()
}

module.exports = {
    getEmailValidation,
};