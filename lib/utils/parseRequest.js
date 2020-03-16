const fakeData = `GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr`;

module.exports = rawRequest => {
  const splitRequest = rawRequest.split('\n');
  const eachWord = splitRequest[0].split(' ');
  const method = eachWord[0];
  const path = eachWord[1];
  const body = rawRequest.split('\r\n\r\n')[1];
  return { method, path, body };
};
