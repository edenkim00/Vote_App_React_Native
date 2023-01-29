const { apiServerDomain } = require('./constants');

async function userInfo(name, grade) {
  const apiUrl = apiServerDomain + '/app/mypage-info';
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


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
