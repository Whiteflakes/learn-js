async function fetchAndTransform(client, id) {
  // client.get should be async and return { id, data }
  const res = await client.get(id);
  return { id: res.id, length: res.data.length };
}

module.exports = { fetchAndTransform };
