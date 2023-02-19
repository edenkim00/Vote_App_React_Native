const { apiServerDomain } = require('./constants');
const { getJWTToken } = require('./utils');

async function userInfo() {
  const apiUrl = apiServerDomain + '/app/mypage-info';
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const jwtToken = await getJWTToken();
  myHeaders.append("x-access-token", jwtToken);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  const response = await fetch(apiUrl, requestOptions)
  return await response.json()
}

module.exports = {
  userInfo,
};
