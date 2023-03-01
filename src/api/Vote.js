const { apiServerDomain } = require('./constants');
const { getJWTToken } = require('./utils');

async function vote(date, sports) {
  const apiUrl = apiServerDomain + '/app/vote';
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const jwtToken = await getJWTToken();
  myHeaders.append("x-access-token", jwtToken);

  const body = JSON.stringify({
    "date": date,
    "sports": sports,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: body,
  };
  const response = await fetch(apiUrl, requestOptions)
  return await response.json()
}

async function voteChange(date, sports) {
  const apiUrl = apiServerDomain + '/app/vote-change';
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const jwtToken = await getJWTToken();
  myHeaders.append("x-access-token", jwtToken);

  const body = JSON.stringify({
    "date": date,
    "sports": sports,
  });

  const requestOptions = {
    method: 'PATCH',
    headers: myHeaders,
    body: body,
  };
  const response = await fetch(apiUrl, requestOptions)
  return await response.json()
}

module.exports = {
  vote,
  voteChange,
};
