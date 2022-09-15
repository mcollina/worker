import fetch from 'node-fetch';

export default async function (port) {
  const res = await fetch('http://localhost:' + port + '/');
  return res.text();
}
