async function fetchAndDouble(fetcher) {
  const v = await fetcher();
  return v * 2;
}

module.exports = { fetchAndDouble };
