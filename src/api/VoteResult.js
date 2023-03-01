const { apiServerDomain } = require('./constants');

async function voteResult(date, grade) {
  const apiUrl = `${apiServerDomain}/app/vote-result?date=${date}&grade=${grade}`;
  const myHeaders = new Headers();
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  const response = await fetch(apiUrl, requestOptions)
  return await response.json()
}

module.exports = {
  voteResult,
};
