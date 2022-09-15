module.exports = async function (port) {
  const fetch = await import('./fetch.mjs');
  return fetch.default(port);
};
