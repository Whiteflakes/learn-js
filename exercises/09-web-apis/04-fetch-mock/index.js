async function fetchAndDouble(fetcher, id) {
  const res = await fetcher(id);
  return res.value * 2;
}
module.exports = { fetchAndDouble };
